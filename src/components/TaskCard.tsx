// src/components/TaskCard.tsx
import { Task } from '@/interfaces/Task';
import Link from 'next/link';

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

export default function TaskCard({ task, onDelete }: TaskCardProps) {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <Link href={`/tasks/${task.id}`}>
        <h2 className="text-xl font-bold">{task.title}</h2>
      </Link>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
      <div className="flex space-x-4 mt-2">
        <Link href={`/tasks/${task.id}/edit`} className="text-blue-500">Edit</Link>
        <button onClick={() => onDelete(task.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
}
