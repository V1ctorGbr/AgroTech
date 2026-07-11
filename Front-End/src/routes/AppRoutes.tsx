import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/page";
import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard/page";
import Fazendas from "../pages/Fazendas/page";
import Culturas from "../pages/Culturas/page";
import Estoque from "../pages/Estoque/page";
import Funcionarios from "../pages/Funcionarios/page";
import Financeiro from "../pages/Financeiro/page";
import Relatorios from "../pages/Relatorios/page";
import Configuracoes from "../pages/Configuracoes/page";

export default function AppRoutes(){


return (

<Routes>


  {/* FORA DO SISTEMA */}
  <Route 
    path="/login"
    element={<Login/>}
  />



  {/* SISTEMA */}
  <Route element={<MainLayout/>}>


    <Route 
      path="/dashboard"
      element={<Dashboard/>}
    />


    <Route
      path="/fazendas"
      element={<Fazendas/>}
    />


    <Route
      path="/culturas"
      element={<Culturas/>}
    />


    <Route
      path="/estoque"
      element={<Estoque/>}
    />


    <Route
      path="/funcionarios"
      element={<Funcionarios/>}
    />


    <Route
      path="/financeiro"
      element={<Financeiro/>}
    />


    <Route
      path="/relatorios"
      element={<Relatorios/>}
    />


    <Route
      path="/configuracoes"
      element={<Configuracoes/>}
    />


  </Route>



  {/* entrada inicial */}
  <Route 
    path="*"
    element={<Login/>}
  />


</Routes>

);

}