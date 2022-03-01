import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/components/page/NovedadesPage.css'
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3700/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  },[])
    return ( 
        <>
        <div class="contenidosnov">
          <div class="centro5">
            <div class="novedad">

            <section className='holder'>
              <h3>Novedades</h3>
              {
                loading ? (
                  <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={NovedadItem.id} 
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo}
                  />)
                  
                )}
            </section>

            </div>
       
         
          </div>
        </div>
      </>
     );
}
 
export default NovedadesPage;