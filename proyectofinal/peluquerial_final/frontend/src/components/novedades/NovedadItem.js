import React from 'react';

import '../../styles/components/page/NovedadesPage.css'

const NovedadItem = (props) => {

    const {title, subtitle, imagen, body} = props;

    return ( 
        <div className='novedades'>
            <article>
                <h4>{title}</h4>
                <p>{subtitle}</p>
                <img src={imagen}/>
                <h3>{body}</h3>
            </article>
            <hr />
        </div>
     );
}
 
export default NovedadItem;