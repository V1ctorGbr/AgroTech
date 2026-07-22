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
  Leaf,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";


const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Fazendas", icon: Tractor, path: "/fazendas" },
  { name: "Culturas", icon: Wheat, path: "/culturas" },
  { name: "Estoque", icon: Warehouse, path: "/estoque" },
  { name: "Funcionários", icon: Users, path: "/funcionarios" },
  { name: "Financeiro", icon: DollarSign, path: "/financeiro" },
  { name: "Relatórios", icon: FileText, path: "/relatorios" },
  { name: "Configurações", icon: Settings, path: "/configuracoes" },
];


export default function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();


  return (

    <aside className="
      fixed
      left-0
      top-0
      z-50

      h-screen
      w-72

      bg-gradient-to-b
      from-green-950
      via-green-900
      to-green-800

      text-white
      shadow-2xl

      flex
      flex-col

      overflow-y-auto
    ">


      {/* Logo */}
      <div className="
        h-24
        flex
        items-center
        px-6
        border-b
        border-green-800
      ">

        <div className="
          w-12
          h-12
          rounded-2xl
          bg-green-600
          flex
          items-center
          justify-center
          shadow-lg
        ">
          <Leaf size={28}/>
        </div>


        <div className="ml-4">

          <h1 className="text-2xl font-bold">
            AgroTech
          </h1>

          <p className="text-green-300 text-sm">
            ERP Agrícola
          </p>

        </div>

      </div>



      {/* Menu */}
      <nav className="
        flex-1
        px-4
        py-6
      ">


        <p className="
          text-xs
          uppercase
          tracking-widest
          text-green-400
          mb-5
          px-3
        ">
          Menu Principal
        </p>



        {menuItems.map((item)=>{

          const Icon = item.icon;

          const active = location.pathname === item.path;


          return (

            <button

              key={item.name}

              onClick={() => navigate(item.path)}

              className={`
                relative
                w-full

                flex
                items-center
                gap-4

                px-4
                py-3
                mb-2

                rounded-xl

                transition-all
                duration-200

                ${
                  active
                  ? "bg-green-700 shadow-lg"
                  : "hover:bg-green-800"
                }
              `}
            >


              {active && (

                <span className="
                  absolute
                  left-0
                  h-8
                  w-1
                  bg-green-300
                  rounded-r-full
                "/>

              )}



              <div className={`
                w-10
                h-10

                rounded-xl

                flex
                items-center
                justify-center

                ${
                  active
                  ? "bg-green-600"
                  : "bg-green-950"
                }
              `}>

                <Icon size={20}/>

              </div>



              <span className="font-medium text-sm">
                {item.name}
              </span>


            </button>

          );

        })}


      </nav>




      {/* Usuário */}
      <div className="
        border-t
        border-green-800
        p-5
      ">


        <div className="
          flex
          items-center
          gap-3
          mb-5
        ">


          <div className="
            w-11
            h-11
            rounded-full

            bg-green-600

            flex
            items-center
            justify-center

            font-bold
          ">
            VG
          </div>



          <div>

            <p className="font-semibold">
              Victor Gabriel
            </p>

            <p className="text-sm text-green-300">
              Administrador
            </p>

          </div>


        </div>




        <button

          onClick={() => navigate("/")}

          className="
            w-full

            flex
            items-center
            gap-3

            p-3

            rounded-xl

            text-red-300

            hover:bg-red-500/10

            transition
          "
        >

          <LogOut size={20}/>

          <span>
            Sair
          </span>


        </button>




        <div className="
          mt-5
          pt-4

          border-t
          border-green-800

          text-center
        ">


          <p className="text-xs text-green-400">
            AgroTech ERP
          </p>


          <p className="text-xs text-green-500 mt-1">
            Versão 1.0.0
          </p>


        </div>


      </div>


    </aside>

  );
}