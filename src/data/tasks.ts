// src/data/tasks.ts
import { Task } from '@/interfaces/Task';

export let tasks: Task[] = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
];

// Utility functions to manipulate the tasks array
export const addTask = (task: Task) => {
  tasks.push(task);
};

export const updateTaskById = (id: number, updatedTask: Task) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
  }
};

export const deleteTaskById = (id: number) => {
  tasks = tasks.filter((task) => task.id !== id);
};
