import { ReactNode, useState } from 'react';

// Interfaces de la pagína
import { Items } from './interfaces';

// Componentes de la pagína
import Card from './components/Card';

// Estilos de la pagína
import './Curriculum.scss';

/**
 * @description   Componente para la presentación de mis estudios y experiencia
 * @dateCreation  06/06/2024
 * @dateUpdating  06/06/2024
 * @userCreation  Sebastian saldarriaga
 * @return        {*}  {ReactNode}
 */
const Curriculum = (): ReactNode => {
  const [education] = useState<Items[]>([
    { date: '2005 - 2008', description: 'te amo mi amor precioso divino', name: 'Universidad de Oxford', title: 'Arte y Multimedia' },
    { date: '2005 - 2008', description: 'te amo mi amor precioso divino', name: 'Universidad de Oxford', title: 'Arte y Multimedia' },
    { date: '2005 - 2008', description: 'te amo mi amor precioso divino', name: 'Universidad de Oxford', title: 'Arte y Multimedia' },
  ]);
  const [workExperience] = useState<Items[]>([
    { date: '2005 - 2008', description: 'te amo mi amor precioso divino', name: 'Universidad de Oxford', title: 'Arte y Multimedia' },
    { date: '2005 - 2008', description: 'te amo mi amor precioso divino', name: 'Universidad de Oxford', title: 'Arte y Multimedia' },
    { date: '2005 - 2008', description: 'te amo mi amor precioso divino', name: 'Universidad de Oxford', title: 'Arte y Multimedia' },
  ]);

  return (
    <div id="curriculum">
      <div className="curriculum__container">
        <p className="curriculum__title">Currículum</p>

        <div className="curriculum__container-rows">
          <div className="col curriculum__row-left">
            <p className="curriculum__subtitle">Educación</p>

            {education.map(({ date, description, name, title}, index) => (
              <Card
                date        = {date}
                name        = {name}
                position    = 'left'
                key         = {index}
                title       = {title}
                description = {description}
              />
            ))}
          </div>

          <div className="col curriculum__row-right">
            <p className="curriculum__subtitle">Experiencia de trabajo</p>

            {workExperience.map(({ date, description, name, title}, index) => (
              <Card
                date        = {date}
                name        = {name}
                position    = 'right'
                key         = {index}
                title       = {title}
                description = {description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
