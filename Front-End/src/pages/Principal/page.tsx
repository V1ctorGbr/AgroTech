import { 
  ArrowRight,
  Leaf,
  Tractor,
  Wheat,
  BarChart3
} from "lucide-react";


export default function PagePrincipal() {

  return (
    <main className="min-h-screen bg-gray-50 p-8">


      {/* Cabeçalho */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 rounded-3xl p-10 text-white shadow-lg">

        <div className="flex justify-between items-center">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <Leaf size={40}/>

              <h1 className="text-4xl font-bold">
                AgroSys ERP
              </h1>

            </div>


            <p className="text-green-100 text-lg max-w-xl">
              Sistema completo para gerenciamento agrícola,
              controle de produção, estoque, funcionários
              e financeiro da propriedade.
            </p>


            <button className="mt-6 bg-white text-green-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-green-100 transition">

              Acessar Dashboard

              <ArrowRight size={20}/>

            </button>


          </div>


          <Tractor size={150} className="opacity-30"/>


        </div>


      </section>




      {/* Recursos */}
      <section className="grid grid-cols-3 gap-6 mt-8">


        <div className="bg-white rounded-2xl p-6 shadow-sm border">

          <Wheat className="text-green-700 mb-4" size={40}/>

          <h2 className="text-xl font-bold">
            Produção Agrícola
          </h2>

          <p className="text-gray-500 mt-2">
            Controle de culturas, safras e produtividade.
          </p>

        </div>



        <div className="bg-white rounded-2xl p-6 shadow-sm border">

          <Tractor className="text-yellow-600 mb-4" size={40}/>

          <h2 className="text-xl font-bold">
            Gestão de Máquinas
          </h2>

          <p className="text-gray-500 mt-2">
            Controle de equipamentos e manutenções.
          </p>

        </div>




        <div className="bg-white rounded-2xl p-6 shadow-sm border">

          <BarChart3 className="text-blue-600 mb-4" size={40}/>

          <h2 className="text-xl font-bold">
            Relatórios
          </h2>

          <p className="text-gray-500 mt-2">
            Análise financeira e resultados da fazenda.
          </p>

        </div>


      </section>



      {/* Status */}
      <section className="mt-8 bg-white rounded-2xl shadow-sm border p-6">

        <h2 className="text-xl font-bold mb-4">
          Status do Sistema
        </h2>


        <div className="grid grid-cols-4 gap-6">


          <div>
            <p className="text-gray-500">
              Fazendas
            </p>

            <p className="text-3xl font-bold text-green-700">
              05
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Funcionários
            </p>

            <p className="text-3xl font-bold text-blue-700">
              18
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Máquinas
            </p>

            <p className="text-3xl font-bold text-yellow-600">
              12
            </p>
          </div>



          <div>
            <p className="text-gray-500">
              Produção
            </p>

            <p className="text-3xl font-bold text-green-700">
              245t
            </p>
          </div>


        </div>

      </section>


    </main>
  );
}