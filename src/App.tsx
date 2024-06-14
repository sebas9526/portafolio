// Componentes de la pagína
import Header from './components/Header';

// Paginas que se van a mostrar
import Home from './pages/Home';
import Skills from './pages/Skills';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Curriculum from './pages/Curriculum';

// Componentes de PrimeReact
import { ScrollTop } from 'primereact/scrolltop';

// Estilos de la pagína
import './App.scss'

const App = () => {
  return (
    <>
      <Header />

      <Home />

      <AboutMe />

      <Skills />

      <Curriculum />


      {/* <section id="portafolio" className="potafolio">
        <div className="contenido-section">
          <h2>PORTAFOLIO</h2>
          <div className="galeria">
            <div className="proyecto">
              <img src="img/p1.png" alt="" />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img src="img/p2.png" alt="" />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img src="img/p3.png" alt="" />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img src="img/p4.png" alt="" />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img src="img/p5.png" alt="" />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img src="img/p6.png" alt="" />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Contact />

      <ScrollTop threshold={100} icon="pi pi-arrow-up" />
    </>
  )
}

export default App;
