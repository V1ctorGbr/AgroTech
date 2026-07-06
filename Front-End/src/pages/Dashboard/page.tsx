export default function Dashboard() {
  return (
    <main className="flex-1 bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Produção</h2>
          <p className="text-3xl font-bold text-green-700">245 t</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Funcionários</h2>
          <p className="text-3xl font-bold text-blue-700">18</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Máquinas</h2>
          <p className="text-3xl font-bold text-yellow-600">12</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">Receita</h2>
          <p className="text-3xl font-bold text-emerald-700">
            R$ 145.000
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl shadow p-6 h-96">
          <h2 className="text-xl font-semibold mb-4">
            Produção Mensal
          </h2>

          <div className="flex items-center justify-center h-full text-gray-400">
            📈 Gráfico virá aqui
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Alertas
          </h2>

          <ul className="space-y-3">
            <li>🚜 Manutenção do Trator A</li>
            <li>🌾 Colheita amanhã</li>
            <li>📦 Estoque de fertilizante baixo</li>
            <li>💰 Contas a pagar</li>
          </ul>
        </div>
      </div>
    </main>
  );
}