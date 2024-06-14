import { ReactNode, useState } from 'react'

// Interfaces de la pagína
import { TechnicalSkills } from './interfaces';

// Componentes de la pagína
import Knob from './components/Knob';

// Estilos de la pagína
import './Skills.scss';

/**
 * @description   Componente para la presentación de los conocimientos
 * @dateCreation  06/06/2024
 * @dateUpdating  06/06/2024
 * @userCreation  Sebastian saldarriaga
 * @return        {*}  {ReactNode}
 */
const Skills = (): ReactNode => {
  const [technicalSkills] = useState<TechnicalSkills[]>([
    { label: 'JavaScript', value: 100 },
    { label: 'PHP', value: 100 },
    { label: 'Java', value: 80 },
    { label: 'Python', value: 50 },
    { label: 'C#', value: 60 },
    { label: 'React js', value: 100 },
    { label: 'React native', value: 100 },
    { label: 'Angular', value: 80 },
    { label: 'nodeJS', value: 100 },
    { label: '.NET', value: 60 },
    { label: 'Vue.js', value: 50 },
    { label: 'Mysql', value: 100 },
    { label: 'SQL Server', value: 100 },
    { label: 'postgreSQL', value: 100 },
    { label: 'MongoDB', value: 50 },
    { label: 'Docker', value: 50 },
    { label: 'HTML', value: 100 },
    { label: 'CSS', value: 100 },
    { label: 'GIT', value: 90 },
    { label: 'Express.js', value: 80 },
    { label: 'Spring Boot', value: 30 },
    { label: 'Swift', value: 25 },
    { label: 'Kotlin', value: 25 },
    { label: 'AWS', value: 10 },
    { label: 'Google Cloud Platform', value: 10 },
    { label: 'Azure', value: 70 },
    { label: 'Flutter', value: 60 },
  ]);

  const [professionalSkills] = useState<TechnicalSkills[]>([
    { label: 'Comunicación', value: 95 },
    { label: 'Trabajo en equipo', value: 100 },
    { label: 'Creatividad', value: 85 },
    { label: 'Dedicación', value: 98 },
    { label: 'Gestión de proyectos', value: 55 },
    { label: 'Liderazgo', value: 80 },
    { label: 'Adaptabilidad', value: 100 },
    { label: 'Resolución de problemas', value: 95 },
    { label: 'Pensamiento crítico', value: 100 },
    { label: 'Orientación al detalle', value: 75 },
    { label: 'Gestión del tiempo', value: 92 },
    { label: 'Negociación', value: 85 },
    { label: 'Toma de decisiones', value: 100 },
    { label: 'Empatía', value: 62 },
    { label: 'Capacidad de análisis', value: 90 },
    { label: 'Manejo del estrés', value: 100 },
    { label: 'Habilidades de presentación', value: 93 },
    { label: 'Habilidades interpersonales', value: 100 },
  ]);

  return (
    <div id="skills">
      <div className="skills__container">
        <p className="skills__title">Skills</p>

        <p className="skills__technical-skill-subtitle">Habilidades técnicas</p>

        <div className='grid mb-4'>
          {technicalSkills.map(({ label, value }: TechnicalSkills, index) => (
            <Knob key={index} value={value} label={label} />
          ))}
        </div>

        <p className="skills__professional-skill-subtitle">Habilidades profesionales</p>

        <div className='grid'>
          {professionalSkills.map(({ label, value }, index) => (
            <Knob key={index} value={value} label={label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;
