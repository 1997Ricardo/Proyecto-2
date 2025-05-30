import "./About.css";
import { cleanPage } from '../utils/cleanPage';
import { Divider } from "../components/Divider/Divider";

export const About = () => {
  const main = document.querySelector('main');
  cleanPage(main);

  main.innerHTML = `
    <section class="about container">
      <h2>About me</h2>
      ${Divider()}
      <div class="about__content">
        <img 
          src="https://avatars.githubusercontent.com/u/182170683?v=4" 
          alt="Foto de Ricardo Osuna" 
          class="about__img"
        />
        <div class="about__text">
<p>¡Hola! Soy <strong>Ricardo Osuna</strong>, licenciado en Ciencias de la Actividad Física y del Deporte y formándome como Programador Full-Stack y Técnico DAM. Tras varios másteres en educación, nutrición y readaptación de lesiones, he volcado mi capacidad de análisis y detalle al mundo del desarrollo web y la gestión de bases de datos.</p>

<p>Me apasiona diseñar experiencias digitales que conjuguen rendimiento y estética, aplicando metodologías basadas en datos tal como hago entrenando a atletas de alto rendimiento en crossfit y carreras híbridas para optimizar cada proyecto con estrategias de mejora continua.</p>

<p>Puedes descargar mi <a href="/cvRicardo.pdf" target="_blank" rel="noopener noreferrer">CV completo en PDF</a> o contactarme directamente por <a href="mailto:lionbeat.adm@gmail.com">correo</a> o vía GitHub: <a href="https://github.com/1997Ricardo" target="_blank" rel="noopener noreferrer">github.com/1997Ricardo</a>.</p>

        </div>
      </div>
    </section>
  `;
};