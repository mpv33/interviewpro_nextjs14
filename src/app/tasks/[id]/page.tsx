// src/app/tasks/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getTaskById} from '@/services/taskServices';

export default async function TaskDetailPage({ params }: { params: { id: string } }) {
  const taskId = parseInt(params.id, 10);
  const task = await getTaskById(taskId);

  if (!task) {
    return notFound();
  }

 
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="text-2xl font-bold">{task.title}</h3>
      <p className="text-gray-700">Completed: {task.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}
