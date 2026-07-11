import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Wallet,
  Plus,
  Search,
  Calendar
} from "lucide-react";


const movimentacoes = [
  {
    descricao: "Venda de Soja",
    categoria: "Receita",
    valor: "R$ 85.000",
    tipo: "entrada",
    data: "05/07/2026",
  },
  {
    descricao: "Compra de Fertilizantes",
    categoria: "Despesa",
    valor: "R$ 12.500",
    tipo: "saida",
    data: "03/07/2026",
  },
  {
    descricao: "Manutenção do Trator",
    categoria: "Manutenção",
    valor: "R$ 4.800",
    tipo: "saida",
    data: "01/07/2026",
  },
  {
    descricao: "Venda de Milho",
    categoria: "Receita",
    valor: "R$ 42.000",
    tipo: "entrada",
    data: "28/06/2026",
  },
];


export default function Financeiro() {

  return (

    <main className="bg-gray-50 min-h-screen p-8">


      {/* Cabeçalho */}

      <div className="flex justify-between items-center mb-8">


        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Financeiro
          </h1>


          <p className="text-gray-500 mt-1">
            Controle financeiro da propriedade agrícola
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

          <Plus size={20}/>

          Nova movimentação

        </button>


      </div>





      {/* Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">


        <div className="bg-white border rounded-2xl p-6">

          <Wallet className="text-green-700 mb-3"/>

          <p className="text-gray-500">
            Saldo Atual
          </p>

          <h2 className="text-3xl font-bold">
            R$ 245 mil
          </h2>

        </div>





        <div className="bg-white border rounded-2xl p-6">

          <TrendingUp className="text-green-600 mb-3"/>

          <p className="text-gray-500">
            Receitas
          </p>

          <h2 className="text-3xl font-bold text-green-700">
            R$ 145 mil
          </h2>

        </div>





        <div className="bg-white border rounded-2xl p-6">

          <TrendingDown className="text-red-600 mb-3"/>

          <p className="text-gray-500">
            Despesas
          </p>

          <h2 className="text-3xl font-bold text-red-600">
            R$ 38 mil
          </h2>

        </div>





        <div className="bg-white border rounded-2xl p-6">

          <DollarSign className="text-blue-600 mb-3"/>

          <p className="text-gray-500">
            Lucro
          </p>

          <h2 className="text-3xl font-bold">
            R$ 107 mil
          </h2>

        </div>


      </div>






      {/* Filtros */}

      <div
        className="
        bg-white
        border
        rounded-2xl
        p-4
        mb-6
        flex
        items-center
        gap-4
        "
      >

        <Search className="text-gray-400"/>


        <input
          placeholder="Pesquisar movimentação..."
          className="
          flex-1
          outline-none
          "
        />



        <button
          className="
          flex
          items-center
          gap-2
          text-gray-600
          "
        >

          <Calendar size={18}/>

          Filtrar

        </button>


      </div>







      {/* Tabela */}

      <div className="bg-white border rounded-2xl overflow-hidden">


        <table className="w-full">


          <thead className="bg-gray-100">


            <tr className="text-left">


              <th className="p-4">
                Descrição
              </th>


              <th className="p-4">
                Categoria
              </th>


              <th className="p-4">
                Data
              </th>


              <th className="p-4">
                Valor
              </th>


              <th className="p-4">
                Status
              </th>


            </tr>


          </thead>



          <tbody>


          {movimentacoes.map((item)=>(


            <tr 
              key={item.descricao}
              className="border-t"
            >


              <td className="p-4 font-semibold">
                {item.descricao}
              </td>



              <td className="p-4 text-gray-600">
                {item.categoria}
              </td>



              <td className="p-4 text-gray-600">
                {item.data}
              </td>



              <td
                className={`
                p-4 font-bold

                ${
                  item.tipo === "entrada"
                  ?
                  "text-green-700"
                  :
                  "text-red-600"
                }
                `}
              >

                {item.valor}

              </td>



              <td className="p-4">


                <span
                  className={`
                  px-3 py-1
                  rounded-full
                  text-sm

                  ${
                    item.tipo === "entrada"
                    ?
                    "bg-green-100 text-green-700"
                    :
                    "bg-red-100 text-red-700"
                  }
                  `}
                >

                  {item.tipo === "entrada" ? "Receita" : "Despesa"}

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