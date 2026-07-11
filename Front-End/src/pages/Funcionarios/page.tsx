import {
  Users,
  UserPlus,
  Search,
  Phone,
  Briefcase,
  CheckCircle,
  Clock
} from "lucide-react";


const funcionarios = [
  {
    nome: "Carlos Henrique",
    cargo: "Operador de Máquinas",
    telefone: "(45) 99999-1111",
    status: "Ativo",
  },
  {
    nome: "João da Silva",
    cargo: "Agrônomo",
    telefone: "(45) 99999-2222",
    status: "Ativo",
  },
  {
    nome: "Marcos Oliveira",
    cargo: "Auxiliar Agrícola",
    telefone: "(45) 99999-3333",
    status: "Férias",
  },
  {
    nome: "Pedro Santos",
    cargo: "Mecânico",
    telefone: "(45) 99999-4444",
    status: "Ativo",
  },
];


export default function Funcionarios() {

  return (

    <main className="bg-gray-50 min-h-screen p-8">


      {/* Cabeçalho */}

      <div className="flex justify-between items-center mb-8">


        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Funcionários
          </h1>

          <p className="text-gray-500 mt-1">
            Gerenciamento da equipe da propriedade
          </p>

        </div>



        <button
          className="
          flex items-center gap-2
          bg-green-700
          text-white
          px-5 py-3
          rounded-xl
          hover:bg-green-800
          transition
          "
        >

          <UserPlus size={20}/>

          Novo Funcionário

        </button>


      </div>





      {/* Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">


        <div className="bg-white border rounded-2xl p-6">

          <Users className="text-green-700 mb-3"/>

          <p className="text-gray-500">
            Total Funcionários
          </p>

          <h2 className="text-3xl font-bold">
            18
          </h2>

        </div>




        <div className="bg-white border rounded-2xl p-6">

          <CheckCircle className="text-green-600 mb-3"/>

          <p className="text-gray-500">
            Ativos
          </p>

          <h2 className="text-3xl font-bold">
            16
          </h2>

        </div>




        <div className="bg-white border rounded-2xl p-6">

          <Clock className="text-yellow-600 mb-3"/>

          <p className="text-gray-500">
            Férias
          </p>

          <h2 className="text-3xl font-bold">
            02
          </h2>

        </div>




        <div className="bg-white border rounded-2xl p-6">

          <Briefcase className="text-blue-600 mb-3"/>

          <p className="text-gray-500">
            Setores
          </p>

          <h2 className="text-3xl font-bold">
            05
          </h2>

        </div>


      </div>





      {/* Pesquisa */}

      <div
        className="
        bg-white
        border
        rounded-2xl
        p-4
        mb-6
        flex
        items-center
        gap-3
        "
      >

        <Search className="text-gray-400"/>


        <input
          placeholder="Pesquisar funcionário..."
          className="
          outline-none
          w-full
          "
        />


      </div>





      {/* Lista */}

      <div className="grid grid-cols-2 gap-6">


        {funcionarios.map((funcionario)=>(


          <div
            key={funcionario.nome}
            className="
            bg-white
            border
            rounded-2xl
            p-6
            shadow-sm
            "
          >


            <div className="flex items-center gap-4">


              <div
                className="
                w-14 h-14
                rounded-full
                bg-green-100
                text-green-700
                flex
                items-center
                justify-center
                text-xl
                font-bold
                "
              >

                {funcionario.nome.charAt(0)}

              </div>



              <div>

                <h2 className="font-bold text-lg">
                  {funcionario.nome}
                </h2>


                <p className="text-gray-500">
                  {funcionario.cargo}
                </p>


              </div>


            </div>





            <div className="mt-5 space-y-3">


              <div className="flex items-center gap-2 text-gray-600">

                <Phone size={18}/>

                {funcionario.telefone}

              </div>





              <div>

                <span
                  className={`
                  px-3 py-1
                  rounded-full
                  text-sm

                  ${
                    funcionario.status === "Ativo"
                    ?
                    "bg-green-100 text-green-700"
                    :
                    "bg-yellow-100 text-yellow-700"
                  }
                  `}
                >

                  {funcionario.status}

                </span>

              </div>


            </div>


          </div>


        ))}


      </div>



    </main>

  );

}