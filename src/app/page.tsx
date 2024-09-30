// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div> 
      <p className="my-12 text-3xl"> Welcome to my Next.js learning project!</p>
      <Link href={'/tasks'}>
        <button className="bg-blue-400 text-white px-4 py-2 rounded">
          Visit Task Page
        </button>
      </Link>
      </div>
     
    </main>
  );
}
