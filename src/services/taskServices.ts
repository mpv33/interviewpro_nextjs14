import { Task } from '@/interfaces/Task';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

// Helper function to make API requests
async function handleRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || 'Something went wrong');
  }

  return response.json();
}

// Get all tasks
export async function getTasks(): Promise<Task[]> {
  return handleRequest('/api/tasks');
}

// Get a task by ID
export async function getTaskById(id: number): Promise<Task | null> {
  try {
    return handleRequest(`/api/tasks/${id}`);
  } catch (error) {
    if ((error as Error).message.includes('404')) return null; // Handle 404 not found
    throw error;
  }
}

// Create a new task
export async function createTask(task: Partial<Task>): Promise<Task> {
  return handleRequest('/api/tasks', {
    method: 'POST',
    body: JSON.stringify(task),
  });
}

// Update an existing task
export async function updateTask(task: Task): Promise<Task> {
  return handleRequest(`/api/tasks/${task.id}`, {
    method: 'PUT',
    body: JSON.stringify(task),
  });
}

// Delete a task by ID
export async function deleteTask(id: number): Promise<void> {
  return handleRequest(`/api/tasks/${id}`, {
    method: 'DELETE',
  });
}
