import {
  FileText,
  Download,
  BarChart3,
  TrendingUp,
  Wheat,
  Tractor,
  Calendar
} from "lucide-react";


const relatorios = [
  {
    titulo: "Produção Agrícola",
    descricao: "Relatório de safras, culturas e produtividade.",
    icon: Wheat,
    cor: "text-green-700",
  },
  {
    titulo: "Máquinas e Equipamentos",
    descricao: "Controle de uso e manutenção das máquinas.",
    icon: Tractor,
    cor: "text-yellow-600",
  },
  {
    titulo: "Desempenho Financeiro",
    descricao: "Análise de receitas, despesas e lucros.",
    icon: TrendingUp,
    cor: "text-blue-600",
  },
];


export default function Relatorios() {

  return (

    <main className="bg-gray-50 min-h-screen p-8">


      {/* Cabeçalho */}

      <div className="flex justify-between items-center mb-8">


        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Relatórios
          </h1>


          <p className="text-gray-500 mt-1">
            Análise dos dados da propriedade agrícola
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

          <Download size={20}/>

          Exportar

        </button>


      </div>






      {/* Resumo */}

      <div className="grid grid-cols-4 gap-6 mb-8">


        <div className="bg-white border rounded-2xl p-6">

          <FileText className="text-green-700 mb-3"/>

          <p className="text-gray-500">
            Relatórios Gerados
          </p>

          <h2 className="text-3xl font-bold">
            36
          </h2>

        </div>





        <div className="bg-white border rounded-2xl p-6">

          <Wheat className="text-green-600 mb-3"/>

          <p className="text-gray-500">
            Produção Atual
          </p>

          <h2 className="text-3xl font-bold">
            245t
          </h2>

        </div>





        <div className="bg-white border rounded-2xl p-6">

          <BarChart3 className="text-blue-600 mb-3"/>

          <p className="text-gray-500">
            Análises
          </p>

          <h2 className="text-3xl font-bold">
            12
          </h2>

        </div>





        <div className="bg-white border rounded-2xl p-6">

          <Calendar className="text-purple-600 mb-3"/>

          <p className="text-gray-500">
            Última Atualização
          </p>

          <h2 className="text-xl font-bold">
            Hoje
          </h2>

        </div>


      </div>







      {/* Relatórios disponíveis */}

      <h2 className="text-xl font-bold mb-5">
        Relatórios Disponíveis
      </h2>



      <div className="grid grid-cols-3 gap-6">


        {relatorios.map((relatorio)=>{


          const Icon = relatorio.icon;


          return (

            <div
              key={relatorio.titulo}
              className="
              bg-white
              border
              rounded-2xl
              p-6
              shadow-sm
              "
            >


              <div
                className="
                w-12 h-12
                rounded-xl
                bg-gray-100
                flex
                items-center
                justify-center
                mb-5
                "
              >

                <Icon 
                  size={28}
                  className={relatorio.cor}
                />

              </div>




              <h3 className="text-lg font-bold">
                {relatorio.titulo}
              </h3>



              <p className="text-gray-500 mt-2">
                {relatorio.descricao}
              </p>





              <button
                className="
                mt-6
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-green-50
                text-green-700
                py-3
                rounded-xl
                hover:bg-green-100
                "
              >

                <FileText size={18}/>

                Visualizar

              </button>



            </div>

          );


        })}


      </div>






      {/* Histórico */}

      <div
        className="
        mt-8
        bg-white
        border
        rounded-2xl
        p-6
        "
      >

        <h2 className="text-xl font-bold mb-4">
          Últimos Relatórios
        </h2>


        <div className="space-y-3">


          <div className="flex justify-between border-b pb-3">

            <span>
              Relatório de Produção - Junho
            </span>

            <span className="text-gray-500">
              05/07/2026
            </span>

          </div>



          <div className="flex justify-between border-b pb-3">

            <span>
              Relatório Financeiro - Segundo Trimestre
            </span>

            <span className="text-gray-500">
              01/07/2026
            </span>

          </div>



          <div className="flex justify-between">

            <span>
              Relatório de Máquinas
            </span>

            <span className="text-gray-500">
              25/06/2026
            </span>

          </div>


        </div>


      </div>



    </main>

  );

}