
import { ReactNode, useEffect, useRef } from 'react';

// Componentes de PrimeReact
import { Toast } from 'primereact/toast';

// Interfaces
import { ToastProps } from './interfaces';

/**
 * @description   Componente para las alertas
 * @dateCreation  13/06/2024
 * @dateUpdating  13/06/2024
 * @userCreation  Sebastian saldarriaga
 * @param {*} {
 *  onHide        -> Función para cuando se cierra la toast
 *  template      -> Si se desea dar un formato diferente es por este parametro
 *  title         -> Es el titulo que se va mostar
 *  message       -> Mensaje que se va mostrar
 *  time          -> Es el tiempo que se va a demorar la alerta en ocultarse
 *  showToast     -> Nos dice si mostramos o no la tarjeta
 *  type          -> Tipo de alerta | success | info | warn | error |
 * }
 * @return        {*}  {ReactNode}
 */
const CmpToast = ({
  onHide,
  template,
  title     = '',
  message   = '',
  time      = 3000,
  showToast = false,
  type      = 'success',
}: ToastProps): ReactNode => {
  const toast = useRef<Toast>(null);

  // Validamos si se muestra o no la alerta
  useEffect(() => {
    if (showToast && toast.current) {
      toast.current.show({
        life    : time,
        severity: type,
        summary : title,
        detail  : message,
        content : template,
      });

      setTimeout(() => {
        if (onHide) onHide();
      }, time);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);

  return <Toast ref={toast} onHide={onHide} />;
}

export default CmpToast;
