import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


export default function MainLayout() {

  return (
    <div>

      <Sidebar />

      <main className="ml-72 min-h-screen">
        <Outlet />
      </main>

    </div>
  );

}