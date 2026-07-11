import { MapPin, Tractor, Wheat, Plus } from "lucide-react";

const fazendas = [
  {
    nome: "Fazenda Santa Maria",
    local: "Paraná - Brasil",
    area: "450 hectares",
    cultura: "Soja e Milho",
    maquinas: 8,
  },
  {
    nome: "Fazenda Boa Esperança",
    local: "Paraná - Brasil",
    area: "320 hectares",
    cultura: "Trigo",
    maquinas: 5,
  },
];


export default function Fazendas() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">


      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Fazendas
          </h1>

          <p className="text-gray-500 mt-1">
            Gerenciamento das propriedades agrícolas
          </p>
        </div>


        <button className="flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition">

          <Plus size={20}/>

          Nova Fazenda

        </button>

      </div>



      <div className="grid grid-cols-3 gap-6">


        {fazendas.map((fazenda)=>(
          
          <div
            key={fazenda.nome}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
          >

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700">

                <MapPin size={25}/>

              </div>


              <div>

                <h2 className="font-bold text-lg">
                  {fazenda.nome}
                </h2>

                <p className="text-sm text-gray-500">
                  {fazenda.local}
                </p>

              </div>

            </div>



            <div className="space-y-3 text-sm">


              <div className="flex justify-between">

                <span className="text-gray-500">
                  Área
                </span>

                <strong>
                  {fazenda.area}
                </strong>

              </div>


              <div className="flex justify-between">

                <span className="text-gray-500">
                  Cultura
                </span>

                <strong>
                  {fazenda.cultura}
                </strong>

              </div>


              <div className="flex justify-between">

                <span className="text-gray-500">
                  Máquinas
                </span>

                <strong>
                  {fazenda.maquinas}
                </strong>

              </div>


            </div>



            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 py-3 rounded-xl hover:bg-green-100">

              <Tractor size={18}/>

              Ver detalhes

            </button>


          </div>

        ))}


      </div>



      <div className="mt-8 bg-white rounded-2xl shadow-sm border p-6">

        <div className="flex items-center gap-3">

          <Wheat className="text-green-700"/>

          <div>

            <h2 className="font-bold text-xl">
              Resumo agrícola
            </h2>

            <p className="text-gray-500">
              770 hectares cadastrados em 2 propriedades
            </p>

          </div>

        </div>

      </div>


    </main>
  );
}