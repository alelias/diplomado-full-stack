import React from 'react';

import '../styles/components/page/HomePage.css'

const HomePage = () => {
    return ( 
        <>
        <div class="presentacion">
      <div class="centro2">
        <div class="izquierda">
          <h2>Bienvenido a Peluqueria X</h2>
          <p class="descripcion">Servicios integrales para tu mascota-hijo</p>
          <button class="boton">RESERVA TU HORA</button>
        </div>
        <div class="derecha">
          <img src="images/9.jpeg" alt="" class="img" />
        </div>
      </div>
    </div>

    <div class="contenidos">
      <div class="centro3">
        <div class="izquierda">
          <h3>Nuestros Valores</h3>
          <p class="descripcioncon">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ut
            commodi maxime saepe optio officia hic, deleniti beatae possimus
            accusamus. Similique labore error voluptate quos tempora libero eos
            corrupti amet.
          </p>

          <div class="imagenes">
            <img src="images/12.jpeg" alt="" />
          </div>
        </div>
        <div class="derecha">
          <h3>Ultimas Novedades</h3>
          <article>
            <h4>Titulo de la primera Noticia</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              molestiae temporibus nemo praesentium quis laudantium est non
              placeat, explicabo cumque facere debitis rem culpa atque
              voluptatem alias voluptatibus eligendi amet?
            </p>
            <a href="novedades.html" class="leermas">Leer más</a>
          </article>
          <article>
            <h4>Titulo de la segunda Noticia</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              molestiae temporibus nemo praesentium quis laudantium est non
              placeat, explicabo cumque facere debitis rem culpa atque
              voluptatem alias voluptatibus eligendi amet?
            </p>
            <a href="novedades.html" class="leermas">Leer más</a>
          </article>
          <article>
            <h4>Titulo de la tercera Noticia</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              molestiae temporibus nemo praesentium quis laudantium est non
              placeat, explicabo cumque facere debitis rem culpa atque
              voluptatem alias voluptatibus eligendi amet?
            </p>
            <a href="novedades.html" class="leermas">Leer más</a>
          </article>
        </div>
      </div>
    </div>
        </>
     );
}
 
export default HomePage;