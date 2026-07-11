import {
  Settings,
  User,
  Bell,
  Shield,
  Database,
  Save,
  Mail,
  Lock
} from "lucide-react";


export default function Configuracoes() {

  return (

    <main className="bg-gray-50 min-h-screen p-8">


      {/* Cabeçalho */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-900">
          Configurações
        </h1>

        <p className="text-gray-500 mt-1">
          Gerencie as configurações do sistema AgroSys ERP
        </p>

      </div>






      <div className="grid grid-cols-3 gap-6">



        {/* Perfil */}

        <div className="bg-white border rounded-2xl p-6">


          <div className="flex items-center gap-3 mb-5">

            <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">

              <User className="text-green-700"/>

            </div>


            <h2 className="text-lg font-bold">
              Perfil do Usuário
            </h2>


          </div>



          <div className="space-y-4">


            <div>

              <label className="text-sm text-gray-500">
                Nome
              </label>

              <input
                value="Victor Gabriel"
                readOnly
                className="
                mt-1
                w-full
                border
                rounded-xl
                p-3
                bg-gray-50
                "
              />

            </div>




            <div>

              <label className="text-sm text-gray-500">
                Cargo
              </label>

              <input
                value="Administrador"
                readOnly
                className="
                mt-1
                w-full
                border
                rounded-xl
                p-3
                bg-gray-50
                "
              />

            </div>


          </div>


        </div>







        {/* Sistema */}

        <div className="bg-white border rounded-2xl p-6">


          <div className="flex items-center gap-3 mb-5">


            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">

              <Settings className="text-blue-700"/>

            </div>


            <h2 className="text-lg font-bold">
              Sistema
            </h2>


          </div>



          <div className="space-y-4">



            <div className="flex items-center justify-between">

              <span>
                Notificações
              </span>


              <Bell className="text-green-600"/>

            </div>




            <div className="flex items-center justify-between">

              <span>
                Backup automático
              </span>


              <Database className="text-blue-600"/>

            </div>




            <div className="flex items-center justify-between">

              <span>
                Segurança
              </span>


              <Shield className="text-yellow-600"/>

            </div>



          </div>


        </div>







        {/* Segurança */}

        <div className="bg-white border rounded-2xl p-6">


          <div className="flex items-center gap-3 mb-5">


            <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">

              <Lock className="text-red-600"/>

            </div>


            <h2 className="text-lg font-bold">
              Segurança
            </h2>


          </div>



          <div className="space-y-4">


            <div>

              <label className="text-sm text-gray-500">
                Email
              </label>


              <div className="flex items-center gap-2 border rounded-xl p-3 mt-1">

                <Mail size={18}/>

                <span>
                  admin@agrosys.com
                </span>

              </div>


            </div>




            <button
              className="
              w-full
              bg-red-50
              text-red-700
              py-3
              rounded-xl
              hover:bg-red-100
              "
            >

              Alterar senha

            </button>


          </div>


        </div>



      </div>







      {/* Preferências */}

      <div
        className="
        mt-8
        bg-white
        border
        rounded-2xl
        p-6
        "
      >


        <h2 className="text-xl font-bold mb-5">
          Preferências do Sistema
        </h2>



        <div className="grid grid-cols-3 gap-6">



          <div>

            <p className="text-gray-500 text-sm">
              Nome da Empresa
            </p>

            <p className="font-semibold mt-1">
              AgroSys Agrícola
            </p>

          </div>




          <div>

            <p className="text-gray-500 text-sm">
              Versão
            </p>

            <p className="font-semibold mt-1">
              1.0.0
            </p>

          </div>




          <div>

            <p className="text-gray-500 text-sm">
              Banco de Dados
            </p>

            <p className="font-semibold mt-1">
              Online
            </p>

          </div>



        </div>




        <button
          className="
          mt-6
          flex
          items-center
          gap-2
          bg-green-700
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-green-800
          "
        >

          <Save size={20}/>

          Salvar Configurações

        </button>



      </div>



    </main>

  );

}