import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Principal/page";

function App() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="ml-72 flex-1">
        <Dashboard />
      </main>

    </div>
  );
}

export default App;