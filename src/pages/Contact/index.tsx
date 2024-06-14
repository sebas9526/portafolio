import { ReactNode, useState } from "react";

// Componentes de PrimeReact
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

// Estilos de la pagína
import './Contact.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationCrosshairs, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import CmpToast from "../../components/Toast/CmpToast";
import Map from "../../components/Map";

/**
 * @description   Componente para contactarme
 * @dateCreation  09/06/2024
 * @dateUpdating  13/06/2024
 * @userCreation  Sebastian saldarriaga
 * @return        {*}  {ReactNode}
 */
const Contact = (): ReactNode => {
  const [name, setName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [tema, setTema] = useState('');
  const [description, setDescription] = useState('');

  const [toast, setToast] = useState({
    title   : '',
    message : '',
    show    : false,
  });

  /**
   * @description Función utilzada para validar si el e-mail ingresado es correctamente un e-mail
   * @param       {*} value
   * @return      {*}  {boolean}
   */
  const validateEmail = (value: string): boolean => {
    const regex = /^[A-Za-z0-9+_.-]+@([A-Za-z0-9.-]+\.[A-Za-z]{2,})$/;

    return regex.test(value);
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method  : 'POST',
        headers : { 'Content-Type': 'application/json' },
        body    : JSON.stringify({
          to: email,
          subject: tema,
          text: description,
          html: (
            <textarea>
              <h1>{name}</h1>
              <p>{telephoneNumber}</p>
            </textarea>
          ),
        }),
      });
      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  /**
   * @description Función utilzada para validar si el e-mail ingresado es correctamente un e-mail
   */
  const validateInformation = (): void => {
    if (name.trim() === '') {
      setToast({
        show    : true,
        title   : 'Verifique la información del campo "Nombre"',
        message : 'Por favor verifique el campo nombre, al parecer, se encuentra vacío.',
      });

      return;
    }

    if (telephoneNumber.trim() === '') {
      setToast({
        show    : true,
        title   : 'Verifique la información del campo "Numero telefónico"',
        message : 'Por favor verifique el campo numero telefónico, al parecer, se encuentra vacío.',
      });

      return;
    }

    if (email.trim() === '') {
      setToast({
        show    : true,
        title   : 'Verifique la información del campo "Dirección de correo electrónico"',
        message : 'Por favor verifique el campo dirección de correo electrónico, al parecer, se encuentra vacío.',
      });

      return;
    }

    if (!validateEmail(email.trim())) {
      setToast({
        show    : true,
        title   : 'E-mail incorrecto',
        message : 'Por favor verifique el E-mail que ingreso, ya que no cumple con los estandares correspondientes, recuerde que debe de ser "correo@example.com" o "correo@example.com.co".',
      });

      return;
    }

    if (tema.trim() === '') {
      setToast({
        show    : true,
        title   : 'Verifique la información del campo "Tema"',
        message : 'Por favor verifique el campo tema, al parecer, se encuentra vacío.',
      });

      return;
    }

    if (description.trim() === '') {
      setToast({
        show    : true,
        title   : 'Verifique la información del campo "Mensaje"',
        message : 'Por favor verifique el campo mensaje, al parecer, se encuentra vacío.',
      });

      return;
    }

    handleSubmit();
  }

  /**
   * @description Función para ocultar las alertas
   */
  const handleHideToast = (): void => setToast({ show: false, title: '', message: '' });

  const { show, title, message } = toast;
  return (
    <div id="contact">
      <div className="contact__container">
        <p className="contact__title">Contacto</p>

        <div className="grid">

          <div className="col">
            <InputText value={name} className="mb-2" onChange={(e) => setName(e.target.value)} placeholder="Tú nombre" />
            <InputText value={telephoneNumber} className="mb-2" onChange={(e) => setTelephoneNumber(e.target.value)} placeholder="Numero telefónico" />
            <InputText value={email} className="mb-2" onChange={(e) => setEmail(e.target.value)} placeholder="Dirección de correo electronico" />
            <InputText value={tema} className="mb-2" onChange={(e) => setTema(e.target.value)} placeholder="Tema" />
            <InputTextarea value={description} className="mb-2" onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} placeholder="Mensaje" />

            <Button icon={<FontAwesomeIcon icon={faPaperPlane} />} onClick={validateInformation}>
              Enviar Mensaje
              <span className="contact__overlay" />
            </Button>
          </div>

          <div className="col">
            <Map position={[6.312813, -75.578072]} />

            <div className="flex justify-content-center contact__info">
              <ul>
                <li className="grid">
                  <FontAwesomeIcon icon={faLocationCrosshairs} className="col-1" />

                  <p className="flex align-content-center flex-wrap">Colombia, París-Bello</p>
                </li>
                <li className="grid">
                  <FontAwesomeIcon icon={faMobileScreenButton} className="col-1" />

                  <p className="flex align-content-center flex-wrap">Llamanos: 3104924327</p>
                </li>
                <li className="grid">
                  <FontAwesomeIcon icon={faEnvelope} className="col-1" />

                  <p className="flex align-content-center flex-wrap">Email: sebas952601@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CmpToast
        type      = 'warn'
        showToast = {show}
        title     = {title}
        time      = {10000}
        message   = {message}
        onHide    = {handleHideToast}
      />
    </div>
  )
}

export default Contact
