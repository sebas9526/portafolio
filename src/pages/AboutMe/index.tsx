import { ReactNode, useState } from "react";

// Interfaces de la pagína
import { Interests, PersonalInformation } from './interfaces';

// Hoja de vida para exportar
import HV from '../../assets/SEBASTIAN SALDARRIAGA.pdf';

// Componente de PrimeReact
import { Button } from 'primereact/button';

// Importamos los iconos de fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faMotorcycle, faFilm, faPlane, faBook, faBicycle, faLightbulb, faCode, faDownload } from '@fortawesome/free-solid-svg-icons';

// Estilos de la pagína
import './AboutMe.scss';

/**
 * @description   Componente para hablar un poco acerca de mi
 * @dateCreation  05/06/2024
 * @dateUpdating  13/06/2024
 * @userCreation  Sebastian saldarriaga
 * @return        {*}  {ReactNode}
 */
const AboutMe = (): ReactNode => {
  const [personalInformation] = useState<PersonalInformation[]>([
    { label: 'Gmail', value: 'sebas952601@gmail.com' },
    { label: 'Telefono', value: '+57 310 492 4327' },
    { label: 'Nacionalidad', value: 'Colombiano' },
    { label: 'Departamento', value: 'Antioquia' },
    { label: 'Municipio', value: 'Bello' },
    { label: 'Dirección', value: 'Calle 21a # 69-18' },
  ]);

  const [interests] = useState<Interests[]>([
    { label: 'DESAROLLO DE SOFTWARE', icon: faCode },
    { label: 'TECNOLOGÍA E INNOCACIÓN', icon: faLightbulb },
    { label: 'EDUCACIÓN Y TUTORIA', icon: faBook },
    { label: 'CICLISMO', icon: faBicycle },
    { label: 'VIDEOJUEGOS', icon: faGamepad },
    { label: 'MOTOS', icon: faMotorcycle },
    { label: 'PELICULAS', icon: faFilm },
    { label: 'VIAJAR', icon: faPlane },
  ]);

  return (
    <div id='about-me'>
      <div className="about-me__container">
        <p className="about-me__title">Sobre Mí</p>

        <p className="about-me__description">
          Soy un tecnólogo en Análisis y Desarrollo de Sistemas de Información con una sólida base técnica y una pasión continua por el aprendizaje y la innovación en el campo del desarrollo de software. Mi experiencia profesional abarca diversas tecnologías y roles, incluyendo el desarrollo back-end y front-end, la administración de bases de datos, y la implementación de soluciones en la nube. A lo largo de mi carrera, he trabajado con lenguajes y herramientas como JavaScript, React.js, React Native, Angular, PHP, Node.js, Java, Python, MySQL, SQL Server, PostgreSQL, MongoDB, Docker, HTML, CSS, C#, .NET, GIT y accesibilidad web.
        </p>

        <p className="about-me__description">
          En mis roles anteriores, he demostrado habilidades excepcionales en la planificación y ejecución de proyectos, el desarrollo de aplicaciones informáticas robustas y escalables, y la colaboración eficaz en equipos multidisciplinarios. Mi capacidad analítica y mi enfoque meticuloso me permiten abordar problemas complejos y encontrar soluciones innovadoras, siempre cumpliendo con los estándares y metodologías de la industria.
        </p>

        <div className="grid mt-7">
          <div className="col">
            <p className="about-me__personal-information-subtitle">Datos Personales</p>

            <ul className="about-me__personal-information-ul">
              {personalInformation.map(({ label, value }: PersonalInformation, index: number) => (
                <li key={index} className="grid about-me__personal-information-li">
                  <strong className="col-4">{label}</strong>

                  <span className='col-8'>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <p className="about-me__interests-subtitle">Intereses</p>

            <div className="grid about-me__container-interests">
              {interests.map(({ label, icon }: Interests, index: number) => (
                <div key={index} className="col-3 about-me__interests">
                  <FontAwesomeIcon className="mb-3" icon={icon} style={{ color: '#fff', fontSize: '2rem' }} />

                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href={HV} download style={{ textDecoration: 'none' }}>
          <Button icon={<FontAwesomeIcon icon={faDownload} />}>
            Descargar CV
            <span className="about-me__overlay" />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default AboutMe
