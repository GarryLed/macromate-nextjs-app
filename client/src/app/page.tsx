// testing tailwindcss setup in Next.js
import GridShowcase from "@/components/ui/GridShowcase";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-red-600 text-center" >Dashboard Page</h1>
        <p className="text-green-500 text-center">If this is green, Tailwind is working</p>
        <p className="text-red-500 text-center">If this is blue, Tailwind is working</p>

        <GridShowcase />
      </main>
    </div>
  );
}

