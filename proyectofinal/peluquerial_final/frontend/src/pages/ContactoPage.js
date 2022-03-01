import React, {useState} from 'react';
import Iframe from 'react-iframe'
import axios from 'axios';
import '../styles/components/page/ContactoPage.css'

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData, [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3700/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error === false){
      setFormData(initialForm);
    }
  }

    return ( 
        <div class="contenidoscont">
        <div class="centro7">
          <section class="categorias">
            <h3>Contacto</h3>
            <section class="formulario">
              <h2 class="titulo-contacto">Envíenos un mensaje</h2>
              <div class="form">
                <form method="POST" action="/contacto" onSubmit={handleSubmit}>
                  <label for="nombre">Nombre:</label><br />
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre"
                  /><br />
  
                  <label for="email">Email:</label><br />
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingrese su email"
                  /><br />

                <label for="telefono">Telefono:</label><br />
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ingrese su telefono"
                  /><br />
  
                  <label for="mensaje">Mensaje</label><br />
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Ingrese su mensaje"
                  ></textarea>
                  <br />
                  <hr />
                  <input type="submit" value="Enviar" class="enviar" />
                </form>
                {sending ? <p>Enviado...</p>: null}
                {msg ? <p>{msg}</p>: null}
              </div>
  
              <div class="datos">
                Teléfono Celular: <strong>+569 9999999</strong><br />
                E-Mail: <strong>aelias@gmail.com</strong><br />
                Dirección:
                <strong>La avenida 1344, Santiago, chile</strong><br />
              </div>
            </section>
  
            <section class="mapa">
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.1996240993244!2d-88.16724308529302!3d13.46178879053567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7ad5f427a2f5d1%3A0xf88a2935ceb5b309!2sCalle+metrocentro%2C+San+Miguel!5e0!3m2!1ses!2ssv!4v1509595181090"
                width="427"
                height="450"
                frameborder="0"
                style="border: 0"
                allowfullscreen
              />
            </section>
          </section>
        </div>
      </div>
     );
}
 
export default ContactoPage;