import { ReactNode, useEffect, useRef } from "react";

// Interfaces de la pagína
import { PropsKnob } from "./interfaces";

// Estilos de la pagína
import './Knob.scss';

/**
 * @description   Componente para hablar un poco acerca de mi
 * @dateCreation  06/06/2024
 * @dateUpdating  06/06/2024
 * @userCreation  Sebastian saldarriaga
 * @param {PropsKnob} {
 *  label -> Palabra descriptiva para el componente
 *  value -> Valor que se va a mostrar en la barra
 * }
 * @return        {*}  {ReactNode}
 */
const Knob = ({ label, value }: PropsKnob): ReactNode => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${value}%`;
    }
  }, [value]);

  return (
    <div id="skill" className="col-4">
      <span className="mb-4">{label}</span>

      <div className="skill__knob">
        <div className="skill__progress" ref={progressRef}>
          <span>{value}%</span>
        </div>
      </div>
    </div>
  )
}

export default Knob;
