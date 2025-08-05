import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen scroll-smooth">
      <Navbar />
      <main className="flex-grow w-full"> {children} </main>
      <footer className="w-full flex items-center justify-center py-3">
        <span className="text-default-600">Ferokod © 2025.</span>
      </footer>
    </div>
  );
}
