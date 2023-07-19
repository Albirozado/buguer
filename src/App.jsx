import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MostrarProduto from './Component/MostrarProduto';
const Home = lazy(() => import('./Pages/Home'));

import DetalhesProduto from './Pages/DetalhesProduto';
import MostrarUsuario from './Component/MostrarUsuarioProduto';
import MostrarPedido from './Component/MostrarPedid';
import LayoutBasico from './Component/LayoutBasico';
import AdmminLayout from './Component/AdminLaloyout';

const HomeFoGood = lazy(() => import('./Pages/Sobre'));


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutBasico />}>
            <Route index element={
              <Suspense fallback={
                <div className="loaderContent">
                  <div className="loader"></div>
                </div>
              }>
                <HomeFoGood />
              </Suspense>}
            />

            <Route path='/cardapio' element={<MostrarUsuario />} />
            <Route path='/cardapio/:id' element={<DetalhesProduto />} />
          </Route>
          <Route path='/admin' element={<AdmminLayout />}>
            <Route index element={
              <Suspense fallback={
                <div className="loaderContent">
                  <div className="loader"></div>
                </div>
              }>
              <Home />
              </Suspense>
            
            } 
            />
            <Route path='/admin/previewadmin' element={<MostrarProduto />} />
            <Route path='/admin/verpedido' element={<MostrarPedido />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
