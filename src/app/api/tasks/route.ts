// src/app/api/tasks/route.ts
import { NextResponse } from 'next/server';
import { tasks, addTask } from '@/data/tasks';

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const newTask = await req.json();
  addTask({ ...newTask, id: tasks.length + 1 });
  return NextResponse.json(newTask);
}
