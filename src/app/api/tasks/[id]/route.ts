// src/app/api/tasks/[id]/route.ts
import { NextResponse } from 'next/server';
import { tasks, updateTaskById, deleteTaskById } from '@/data/tasks';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const task = tasks.find((task) => task.id === parseInt(params.id, 10));
  if (!task) return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  return NextResponse.json(task);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const updatedTask = await req.json();
  updateTaskById(parseInt(params.id, 10), updatedTask);
  return NextResponse.json(updatedTask);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  deleteTaskById(parseInt(params.id, 10));
  return NextResponse.json({ message: 'Task deleted' });
}
