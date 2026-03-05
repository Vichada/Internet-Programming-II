import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    countTodos: 0
  }),

  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3100/tasks');
        this.todos = response.data;
        this.countTodos = this.todos.filter(t => t.completedAt == null).length; // only pending
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    },

    async addTodo(name) {
      try {
        await axios.post('http://localhost:3100/tasks', {
          name: name,
          user: { id: 1 }
        });
        await this.fetchTodos();
      } catch (error) {
        console.error('Failed to add todo:', error);
      }
    },

    async toggleStatus(id) {
      try {
        const todo = this.todos.find(t => t.id === id);
        if (todo.completedAt == null) {
          await axios.patch(`http://localhost:3100/tasks/${id}/done`);
        } else {
          await axios.patch(`http://localhost:3100/tasks/${id}/pending`);
        }
        await this.fetchTodos();
      } catch (error) {
        console.error('Failed to toggle status:', error);
      }
    },

    async clearAll() {
      try {
        await Promise.all(
          this.todos.map(todo => axios.delete(`http://localhost:3100/tasks/${todo.id}`))
        );
        await this.fetchTodos();
      } catch (error) {
        console.error('Failed to clear todos:', error);
      }
    }
  }
});
