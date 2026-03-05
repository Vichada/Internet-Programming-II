import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TaskService {
    private tasksRepo;
    constructor(tasksRepo: Repository<Task>);
    getAllTasks(): Promise<Task[]>;
    getTask(id: number): Promise<Task | null>;
    createTask(taskData: Partial<Task>): Promise<Task>;
    updateTask(id: number, updateData: Partial<Task>): Promise<Task | null>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
