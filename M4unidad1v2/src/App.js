
/* Armar un layout básico separado en componentes estáticos 
utilizando como apoyo el material complementario provisto. 
Subir a un repositorio publico en GitHub y compartir la URL del mismo. */
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import ServiciosPage from './pages/ServiciosPage'
import NovedadesPage from './pages/NovedadesPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/nosotros' exact element={<NosotrosPage />} />
        <Route path='/servicios' exact element={<ServiciosPage />} />
        <Route path='/novedades' exact element={<NovedadesPage />} />
        <Route path='/contacto' exact element={<ContactoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
