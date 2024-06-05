import { ReactNode } from 'react';

// Imagenes usadas en la pagína
import profile from '../../assets/profile.jpeg';
import GitHub from '../../assets/github.svg'
import GitLab from '../../assets/gitlab.svg'
import LinkedIn from '../../assets/linkedin.svg'

// Componente de PrimeReact
import { Image } from 'primereact/image';


// Estilos de la pagína
import './Home.scss';

/**
 * @description   Componente para la presentación o inicio de la aplicación
 * @dateCreation  04/06/2024
 * @dateUpdating  04/06/2024
 * @userCreation  Sebastian saldarriaga
 * @return        {*}  {ReactNode}
 */
const Home = (): ReactNode => {
  return (
    <div id="home">
      <div className="p-5 text-center mr-auto ml-auto border-round-xl content-banner">
        <Image src={profile} alt="Profile" />

        <h2 className='mt-3'>SEBASTIAN SALDARRIAGA MUÑOZ</h2>
        <h3 className='mt-4 mb-5'>Desarrollador de software Full-Stack</h3>

        <div className="flex flex-wrap justify-content-center gap-5">
          {[GitHub, LinkedIn, GitLab]
            .map((icon: string, index: number) => (
            <div key={index} className="flex justify-content-center align-content-center flex-wrap cursor-pointer social-networks gap-4">
              <Image src={icon} alt={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
