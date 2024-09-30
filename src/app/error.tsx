"use client"
// /app/error.tsx
export default function Error({ error }: { error: Error }) {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  