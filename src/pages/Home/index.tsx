import { ReactNode } from 'react';

// Imagenes usadas en la pagína
import profile from '../../assets/profile.jpeg';

// Componente de PrimeReact
import { Image } from 'primereact/image';

// Importamos los iconos de fortawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons';

// Estilos de la pagína
import './Home.scss';

/**
 * @description   Componente para la presentación o inicio de la aplicación
 * @dateCreation  04/06/2024
 * @dateUpdating  05/06/2024
 * @userCreation  Sebastian saldarriaga
 * @return        {*}  {ReactNode}
 */
const Home = (): ReactNode => {
  return (
    <div id="home">
      <div className="p-5 text-center mr-auto ml-auto border-round-xl container-banner">
        <Image src={profile} alt="Profile" />

        <h2 className='mt-3'>SEBASTIAN SALDARRIAGA MUÑOZ</h2>
        <h3 className='mt-4 mb-5'>Desarrollador de software Full-Stack</h3>

        <div className="flex flex-wrap justify-content-center gap-5">
          {[faGithub, faLinkedin, faGitlab]
            .map((icon, index) => (
            <div key={index} className="flex justify-content-center align-content-center flex-wrap cursor-pointer social-networks gap-4">
              <FontAwesomeIcon icon={icon} style={{ color: '#fff', fontSize: '2rem' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
