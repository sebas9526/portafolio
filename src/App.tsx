import './App.scss'
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />

      <Home />

      <section id="sobremi" className="sobremi">
        <div className="contenido-section">
          <h2>Sobre Mí</h2>
          <p><span>Hola, soy Sebastian Saldarriaga.</span> Soy novio de Mariana Navarro y me voy a casar con ella,
            ella es el amor de mi vida y la amo demasiado, yo jamas le voy a poner cacho, porque la amo(me corta mis
            bolitas 😢) ella es mi amor y la amo demasiado.</p>

          <div className="fila-datos-personales-intereses">
            <div className="col">
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Fecha De Nacimiento</strong>
                  28/07/1995
                </li>
                <li>
                  <strong>Gmail</strong>
                  example@gmail.com
                </li>
                <li>
                  <strong>Fecha De Nacimiento</strong>
                  28/07/1995
                </li>
                <li>
                  <strong>Dirección</strong>
                  Dónde este mi amorcito lindo.
                </li>
                <li>
                  <strong>Cargo</strong>
                  <span>freelance</span>
                </li>
              </ul>
            </div>

            <div className="col">
              <h3>intereses</h3>
              <div className="contenedor-intereses">
                <div className="intereses">
                  <i className="fa-solid fa-gamepad"></i>
                  <span>JUEGOS</span>
                </div>
                <div className="intereses">
                  <i className="fa-sharp fa-solid fa-motorcycle"></i>
                  <span>MOTOS</span>
                </div>
                <div className="intereses">
                  <i className="fa-solid fa-film"></i>
                  <span>PELICULAS</span>
                </div>
                <div className="intereses">
                  <i className="fa-solid fa-language"></i>
                  <span>IDIOMAS</span>
                </div>
                <div className="intereses">
                  <i className="fa-solid fa-plane"></i>
                  <span>viajar</span>
                </div>

              </div>
            </div>
          </div>
          <button>
            Descargar CV <i className="fa-solid fa-cloud-arrow-down"></i>
            <span className="overlay"></span>
          </button>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="contenido-section">
          <h2>Skills</h2>
          <div className="fila-datos-personales-intereses">

            <div className="col">
              <h3>Technical Skill</h3>
              <div className="skill">
                <span>Javascript</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>75%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>HTML & CSS</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>89%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Photoshop</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>95%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Wordpress</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>81%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Drupal</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>55%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <h3>Professional Skill</h3>
              <div className="skill">
                <span>Comunicación</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>80%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Trabajo En Equipo</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>89%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Creatividad</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>95%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Dedicación</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>81%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Proyect Management</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>55%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="curriculum" className="curriculum">
        <div className="contenido-section">
          <h2>Currículum</h2>
          <div className="fila-datos-personales-intereses">
            <div className="col izquierda">
              <h3>Educación</h3>
              <div className="item">
                <h4>Arte y Multimedia</h4>
                <span className="casa">Universidad de Oxford</span>
                <span className="fecha">2005 - 2008</span>
                <p>te amo mi amor precioso divino</p>
                <div className="conectori">
                  <div className="circuloi"></div>
                </div>
              </div>
              <div className="item">
                <h4>Arte y Multimedia</h4>
                <span className="casa">Universidad de Oxford</span>
                <span className="fecha">2005 - 2008</span>
                <p>te amo mi amor precioso divino</p>
                <div className="conectori">
                  <div className="circuloi"></div>
                </div>
              </div>
              <div className="item">
                <h4>Arte y Multimedia</h4>
                <span className="casa">Universidad de Oxford</span>
                <span className="fecha">2005 - 2008</span>
                <p>te amo mi amor precioso divino</p>
                <div className="conectori">
                  <div className="circuloi"></div>
                </div>
              </div>
            </div>

            <div className="col derecha">
              <h3>Experiencia de Trabajo</h3>
              <div className="item">
                <h4>Front Developer</h4>
                <span className="casa">Nombre de Compañía</span>
                <span className="fecha">2005 - 2008</span>
                <p>te amo mi amor precioso divino</p>
                <div className="conectord">
                  <div className="circulod"></div>
                </div>
              </div>
              <div className="item">
                <h4>Front Developer</h4>
                <span className="casa">Nombre de Compañía</span>
                <span className="fecha">2005 - 2008</span>
                <p>te amo mi amor precioso divino</p>
                <div className="conectord">
                  <div className="circulod"></div>
                </div>
              </div>
              <div className="item">
                <h4>Front Developer</h4>
                <span className="casa">Nombre de Compañía</span>
                <span className="fecha">2005 - 2008</span>
                <p>te amo mi amor precioso divino</p>
                <div className="conectord">
                  <div className="circulod"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="portafolio" className="potafolio">
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
      </section>

      <section id="contacto" className="contacto">
        <div className="contenido-section">
          <h2>CONTACTO</h2>
          <div className="fila-datos-personales-intereses">

            <div className="col">
              <input type="text" placeholder="Tú Nombre" />
              <input type="text" placeholder="Numero Telefónico" />
              <input type="text" placeholder="Dirección De Correo" />
              <input type="text" placeholder="Tema" />
              <textarea name="" id="" placeholder="Mensaje"></textarea>
              <button>
                Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </div>

            <div className="col">
              <img src="img/ubicacion.png" alt="" />
              <div className="info">
                <ul>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    Colombia, París-Bello
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    Llamanos: 3104924327
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    Email: example@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
