import { ReactNode } from 'react';

// Interfaces del componente
import { PropsCard } from './interfaces';

// Estilos del componente
import './Card.scss';

/**
 * @description   Componente para la presentación de mis estudios y experiencia
 * @dateCreation  06/06/2024
 * @dateUpdating  06/06/2024
 * @userCreation  Sebastian saldarriaga
 * @param {PropsCard} {
 *  title -> Titulo de la tarjeta
 *  name -> Seria el nombre de la empresa o el instituto
 *  date -> Fecha en que se dio el evento
 *  description -> Descripción del estudio o experiencia
 *  position -> Posición de la tarjeta, ya sea left o right
 * }
 * @return        {*}  {ReactNode}
 */
const Card = ({ title, name, date, description, position }: PropsCard): ReactNode => {
  return (
    <div id="item">
      <p className='item__title'>{title}</p>

      <p className="item__name">{name}</p>

      <p className="item__date">{date}</p>

      <p className="item__description">{description}</p>

      <div className={`item__connector-${position}`}>
        <div className={`item__circle-${position}`}></div>
      </div>
    </div>
  )
}

export default Card;
