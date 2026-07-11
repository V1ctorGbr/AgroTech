import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Login(){

  const navigate = useNavigate();


  return (

    <main className="
      min-h-screen
      bg-gradient-to-br
      from-green-950
      to-green-700
      flex
      items-center
      justify-center
    ">


      <div className="
        bg-white
        w-96
        rounded-3xl
        shadow-2xl
        p-8
      ">


        <div className="flex justify-center mb-6">

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-green-600
            text-white
            flex
            items-center
            justify-center
          ">

            <Leaf size={35}/>

          </div>

        </div>



        <h1 className="
          text-3xl
          font-bold
          text-center
        ">
          AgroSys
        </h1>


        <p className="
          text-center
          text-gray-500
          mb-8
        ">
          ERP Agrícola
        </p>



        <input
          className="
          w-full
          border
          rounded-xl
          p-3
          mb-4
          "
          placeholder="Email"
        />



        <input
          type="password"
          className="
          w-full
          border
          rounded-xl
          p-3
          mb-6
          "
          placeholder="Senha"
        />



        <button
          onClick={() => navigate("/dashboard")}
          className="
          w-full
          bg-green-700
          text-white
          py-3
          rounded-xl
          hover:bg-green-800
          "
        >
          Entrar
        </button>



        <p className="
          text-center
          text-sm
          text-gray-500
          mt-6
        ">
          Ainda não possui conta?
        </p>


        <button
          className="
          w-full
          mt-2
          text-green-700
          font-semibold
          "
        >
          Criar cadastro
        </button>


      </div>


    </main>

  );
}