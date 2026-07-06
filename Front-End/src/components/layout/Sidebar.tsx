import {
  LayoutDashboard,
  Tractor,
  Wheat,
  Warehouse,
  Users,
  DollarSign,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Fazendas", icon: Tractor },
  { name: "Culturas", icon: Wheat },
  { name: "Estoque", icon: Warehouse },
  { name: "Funcionários", icon: Users },
  { name: "Financeiro", icon: DollarSign },
  { name: "Relatórios", icon: FileText },
  { name: "Configurações", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-green-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-green-800">
        <h1 className="text-2xl font-bold">🌱 AgroSys</h1>
        <p className="text-sm text-green-200">ERP Agrícola</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex items-center gap-4 w-full p-3 rounded-lg hover:bg-green-800 transition-all mb-2"
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Rodapé */}
      <div className="p-4 border-t border-green-800">
        <button className="flex items-center gap-3 text-red-300 hover:text-red-200">
          <LogOut size={20} />
          Sair
        </button>
      </div>
    </aside>
  );
}