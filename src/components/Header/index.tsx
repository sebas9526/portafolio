import { ReactNode, useState } from 'react';

// Interfaces del componente
import { ItemsMenu } from './interface';

// Componente de PrimeReact
import { Menubar } from 'primereact/menubar';

// Estilos del componente
import './Header.scss';

/**
 * @description   Componente para el encabezado de la pagina
 * @dateCreation  04/06/2024
 * @dateUpdating  04/06/2024
 * @userCreation  Sebastian saldarriaga
 * @return        {*}  {ReactNode}
 */
const Header = (): ReactNode => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [itemsMenu] = useState<ItemsMenu[]>([
    { id: 'home', value: 'INICIO' },
    { id: 'sobremi', value: 'SOBRE MI' },
    { id: 'skills', value: 'SKILLS' },
    { id: 'curriculum', value: 'CURRICULUM' },
    { id: 'portafolio', value: 'PORTAFOLIO' },
    { id: 'contacto', value: 'CONTACTO' },
  ]);

  const menuItems = itemsMenu.map(item => ({
    label   : item.value,
    command : () => window.location.hash = `#${item.id}`
  }));

  return (
    <div id='header'>
      <Menubar model={menuItems} start={<a href="#" className="logo">S. S. M.</a>} />

      <div className={`nav-responsive ${menuVisible ? 'active' : ''}`} onClick={() => setMenuVisible(!menuVisible)}>
        <i className="pi pi-align-justify" />
      </div>
    </div>
  );
}

export default Header;
