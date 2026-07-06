import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard/page";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;