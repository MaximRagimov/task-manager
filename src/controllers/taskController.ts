import { Request, Response, NextFunction } from "express";
import Task from '../models/task';
import TaskRoutes from "../routes/taskRoutes";
import exp from "node:constants";

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, status  } = req.body;
        const task = await Task.create({ title, description, status });
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
};

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
};

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        next(err);
    }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, status } = req.body;
        const task = await Task.findByPk(req.params.id);
        if (task) {
            task.title = title;
            task.description = description;
            task.status = status;
            await task.save();
            res.status(200).json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        next(err);
    }
};

export const deleteTask = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            await task.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        next(err);
    }
};