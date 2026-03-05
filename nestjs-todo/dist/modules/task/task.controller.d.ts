import { TaskService } from './task.service';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAllTasks(): Promise<import("./task.entity").Task[]>;
    getTask(id: number): Promise<import("./task.entity").Task | null>;
    createTask(body: any): Promise<import("./task.entity").Task>;
    markTaskAsDone(id: number): Promise<import("./task.entity").Task | null>;
    markTaskAsPending(id: number): Promise<import("./task.entity").Task | null>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
