import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">

      <Sidebar />

      <main className="ml-80">
        {children}
      </main>

    </div>
  );
}