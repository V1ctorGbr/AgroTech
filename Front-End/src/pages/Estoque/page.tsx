import {
  Package,
  Wheat,
  Tractor,
  AlertTriangle,
  Plus,
  Search
} from "lucide-react";


const estoque = [
  {
    nome: "Sementes de Soja",
    categoria: "Sementes",
    quantidade: "450 kg",
    status: "Disponível",
  },
  {
    nome: "Fertilizante NPK",
    categoria: "Adubo",
    quantidade: "1200 kg",
    status: "Disponível",
  },
  {
    nome: "Óleo Diesel",
    categoria: "Combustível",
    quantidade: "300 litros",
    status: "Baixo",
  },
  {
    nome: "Peças de Trator",
    categoria: "Manutenção",
    quantidade: "35 unidades",
    status: "Disponível",
  },
];


export default function Estoque() {

  return (

    <main className="bg-gray-50 min-h-screen p-8">


      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Estoque
          </h1>

          <p className="text-gray-500 mt-1">
            Controle de produtos e materiais agrícolas
          </p>

        </div>


        <button className="
          flex items-center gap-2
          bg-green-700
          text-white
          px-5 py-3
          rounded-xl
          hover:bg-green-800
          transition
        ">

          <Plus size={20}/>

          Novo Produto

        </button>


      </div>




      {/* Cards resumo */}
      <div className="grid grid-cols-4 gap-6 mb-8">


        <div className="bg-white rounded-2xl border p-6">

          <Package className="text-green-700 mb-3"/>

          <p className="text-gray-500">
            Produtos
          </p>

          <h2 className="text-3xl font-bold">
            48
          </h2>

        </div>



        <div className="bg-white rounded-2xl border p-6">

          <Wheat className="text-yellow-600 mb-3"/>

          <p className="text-gray-500">
            Sementes
          </p>

          <h2 className="text-3xl font-bold">
            12
          </h2>

        </div>




        <div className="bg-white rounded-2xl border p-6">

          <Tractor className="text-blue-600 mb-3"/>

          <p className="text-gray-500">
            Peças
          </p>

          <h2 className="text-3xl font-bold">
            20
          </h2>

        </div>




        <div className="bg-white rounded-2xl border p-6">

          <AlertTriangle className="text-red-600 mb-3"/>

          <p className="text-gray-500">
            Estoque baixo
          </p>

          <h2 className="text-3xl font-bold">
            03
          </h2>

        </div>


      </div>





      {/* Pesquisa */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-4
        mb-6
        flex
        items-center
        gap-3
      ">

        <Search className="text-gray-400"/>

        <input
          placeholder="Pesquisar produto..."
          className="
            w-full
            outline-none
            text-gray-700
          "
        />

      </div>





      {/* Lista estoque */}

      <div className="bg-white rounded-2xl border overflow-hidden">


        <table className="w-full">


          <thead className="bg-gray-100">

            <tr className="text-left">

              <th className="p-4">
                Produto
              </th>

              <th className="p-4">
                Categoria
              </th>

              <th className="p-4">
                Quantidade
              </th>

              <th className="p-4">
                Status
              </th>

            </tr>

          </thead>



          <tbody>


          {estoque.map((item)=>(

            <tr 
              key={item.nome}
              className="border-t"
            >

              <td className="p-4 font-semibold">
                {item.nome}
              </td>


              <td className="p-4 text-gray-600">
                {item.categoria}
              </td>


              <td className="p-4">
                {item.quantidade}
              </td>



              <td className="p-4">

                <span
                  className={`
                    px-3 py-1
                    rounded-full
                    text-sm

                    ${
                      item.status === "Baixo"
                      ?
                      "bg-red-100 text-red-700"
                      :
                      "bg-green-100 text-green-700"
                    }
                  `}
                >

                  {item.status}

                </span>


              </td>


            </tr>


          ))}


          </tbody>


        </table>


      </div>



    </main>

  );

}