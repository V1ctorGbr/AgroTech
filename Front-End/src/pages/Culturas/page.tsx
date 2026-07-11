import { Wheat, Calendar, TrendingUp, MapPin, Plus } from "lucide-react";


const culturas = [
  {
    nome: "Soja",
    area: "350 hectares",
    producao: "1.200 toneladas",
    safra: "2026",
    local: "Fazenda Santa Maria",
  },
  {
    nome: "Milho",
    area: "180 hectares",
    producao: "750 toneladas",
    safra: "2026",
    local: "Fazenda Santa Maria",
  },
  {
    nome: "Trigo",
    area: "240 hectares",
    producao: "600 toneladas",
    safra: "2026",
    local: "Fazenda Boa Esperança",
  },
];


export default function Culturas() {

  return (
    <main className="bg-gray-50 min-h-screen p-8">


      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Culturas
          </h1>

          <p className="text-gray-500 mt-1">
            Controle de culturas e produção agrícola
          </p>

        </div>


        <button className="
          flex items-center gap-2
          bg-green-700
          text-white
          px-5 py-3
          rounded-xl
          hover:bg-green-800
        ">

          <Plus size={20}/>

          Nova Cultura

        </button>


      </div>




      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">


        {culturas.map((cultura)=>(


          <div
            key={cultura.nome}
            className="
              bg-white
              rounded-2xl
              border
              shadow-sm
              p-6
            "
          >


            <div className="flex items-center gap-4 mb-5">


              <div className="
                w-12 h-12
                rounded-xl
                bg-green-100
                flex items-center
                justify-center
                text-green-700
              ">

                <Wheat size={26}/>

              </div>



              <div>

                <h2 className="text-xl font-bold">
                  {cultura.nome}
                </h2>

                <p className="text-sm text-gray-500">
                  Safra {cultura.safra}
                </p>

              </div>


            </div>





            <div className="space-y-3">


              <div className="flex justify-between">

                <span className="text-gray-500">
                  Área plantada
                </span>

                <strong>
                  {cultura.area}
                </strong>

              </div>



              <div className="flex justify-between">

                <span className="text-gray-500">
                  Produção
                </span>

                <strong>
                  {cultura.producao}
                </strong>

              </div>




              <div className="flex items-center gap-2 text-sm text-gray-500">

                <MapPin size={16}/>

                {cultura.local}

              </div>



            </div>



            <button className="
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
            ">

              <TrendingUp size={18}/>

              Ver produção

            </button>



          </div>


        ))}


      </div>




      {/* Resumo */}
      <div className="
        mt-8
        bg-white
        rounded-2xl
        border
        shadow-sm
        p-6
      ">


        <div className="flex items-center gap-4">


          <Calendar className="text-green-700" size={35}/>


          <div>

            <h2 className="text-xl font-bold">
              Resumo da safra
            </h2>


            <p className="text-gray-500">
              770 hectares cultivados com 3 culturas cadastradas
            </p>


          </div>


        </div>


      </div>


    </main>
  );
}