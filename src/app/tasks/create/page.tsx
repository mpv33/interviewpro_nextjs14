// src/app/tasks/create/page.tsx
'use client';

import { useState } from 'react';
import { createTask } from '@/services/taskServices';
import { useRouter } from 'next/navigation';

export default function CreateTaskPage() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({ title, completed });
    router.push('/tasks');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="mr-2"
            />
            Completed
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Create Task
        </button>
      </form>
    </div>
  );
}
