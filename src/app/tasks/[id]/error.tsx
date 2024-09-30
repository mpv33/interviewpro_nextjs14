"use client"

export default function TaskDetailError({ error }: { error: Error }) {
    return (
      <div className="text-red-500">
        <h2 className="text-xl">Error loading task!</h2>
        <p>{error.message}</p>
      </div>
    );
  }
  