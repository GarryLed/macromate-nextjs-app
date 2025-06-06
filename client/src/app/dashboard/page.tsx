import GridShowcase from "@/components/ui/GridShowcase";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <GridShowcase />
      </main>
    </div>
  );
}
  