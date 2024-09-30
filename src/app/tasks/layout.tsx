import Link from 'next/link';
import React from 'react';

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className='flex justify-space gap-12'>
      
        <h2 className="text-3xl font-bold text-gray-800">Task Management</h2>
        <Link href={'/'}> 
        <button className='rounded px-4 py-1 bg-blue-400'> Back to Home</button>
        </Link>
      </div>

      {children}
    </div>
  );
}
