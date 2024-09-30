// src/app/tasks/[id]/edit/page.tsx
"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getTaskById, updateTask } from '@/services/taskServices';
import { Task } from '@/interfaces/Task';

export default function EditTaskPage({ params }: { params: { id: string } }) {
  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const taskId = parseInt(params.id, 10);

  // Fetch task details to pre-fill the form
  useEffect(() => {
    const loadTask = async () => {
      const fetchedTask = await getTaskById(taskId);
      if (fetchedTask) {
        setTask(fetchedTask);
        setTitle(fetchedTask.title);
        setCompleted(fetchedTask.completed);
      } else {
        setError('Task not found');
      }
    };
    loadTask();
  }, [taskId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setError('Task title cannot be empty.');
      return;
    }

    const updatedTask = await updateTask({ id: taskId, title, completed });
    if (updatedTask) {
      router.push('/tasks');
    }
  };

  if (!task) return <div>{error ? error : 'Loading...'}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="border p-2"
          />
          <label>Completed</label>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
