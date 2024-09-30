"use client";

import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '@/services/taskServices';
import Link from 'next/link';
import { Task } from '@/interfaces/Task';
import TaskCard from '@/components/TaskCard';

export default function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Load tasks from API
  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching

      try {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        const errMsg = error instanceof Error ? error.message : 'Unexpected error';
        setError(`Failed to load tasks: ${errMsg}`);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  // Handle task deletion
  const handleDelete = async (id: number) => {
    setError(null); // Reset error before deletion
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : 'Unexpected error';
      setError(`Failed to delete task: ${errMsg}`);
    }
  };

  return (
    <div className="p-6">
      <Link href="/tasks/create" className="text-blue-500 mb-4 inline-block">
        Add New Task
      </Link>

      {/* Display loading spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      ) : error ? (
        // Display error message
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      ) : tasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        // If no tasks are available
        <div className="text-gray-500 text-center col-span-2">
          No tasks found.
        </div>
      )}
    </div>
  );
}
