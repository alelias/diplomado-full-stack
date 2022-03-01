import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/components/layout/Header.css'

const Header = () => {
    return ( 
        <header class="header">
        <div class="centro1">
          <div class="logo">
            <h2>Peluqueria Canina X</h2>
            <p>Servicio de peluquería canina y felina</p>
          </div>
          <div class="menu">
            <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/nosotros'>Nosotros</Link></li>
                    <li><Link to='/servicios'>Servicios</Link></li>
                    <li><Link to='/novedades'>Novedades</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
            </ul>
          </div>
        </div>
      </header>
     );
}

 
export default Header;