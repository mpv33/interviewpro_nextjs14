import './globals.css';

export const metadata = {
  title: 'InterviewPro NextJs',
  description: 'Learing Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
     
        <main className="min-h-screen container mx-auto p-4">{children}</main>
     
      </body>
    </html>
  );
}
