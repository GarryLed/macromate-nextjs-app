
// Update the import path to the correct relative path if the Dashboard component is in the same folder
import Dashboard from "./Dashboard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Dashboard</h1>
        <Dashboard />
      </main>
    </div>
  );
}

  