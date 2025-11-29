import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './Pages/Home/index.css'; // Importa os estilos globais

// Componentes do Layout
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

// Páginas
import Home from './Pages/Home/index.jsx'; 
import Destinos from './Pages/Destinos/Destinos.jsx';
import Ofertas from './Pages/Ofertas/Ofertas.jsx';
import Contato from './Pages/Contato/Contato.jsx';


const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content-area"> 
        <Outlet /> {/* Renderiza a página (Home, Destinos...) */}
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);