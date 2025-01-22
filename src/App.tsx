import React from 'react'
import './App.css'

// Definimos interfaces para nuestros tipos
interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen?: string;
  url?: string;
}

interface ContactoInfo {
  email: string;
  linkedin?: string;
  github?: string;
}

const App: React.FC = () => {
  const proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: "Mi Primer Proyecto",
      descripcion: "Descripción del proyecto",
      tecnologias: ["React", "TypeScript", "CSS"],
    }
  ];

  const contactoInfo: ContactoInfo = {
    email: "tu@email.com",
    github: "https://github.com/tuusuario"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Portfolio</h1>
      </header>
      
      <main>
        <section id="sobre-mi">
          <h2>Sobre Mí</h2>
          <p>Tu descripción aquí</p>
        </section>
        
        <section id="proyectos">
          <h2>Mis Proyectos</h2>
          <div className="proyectos-grid">
            {proyectos.map((proyecto) => (
              <article key={proyecto.id} className="proyecto-card">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                <div className="tecnologias">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        
        <section id="contacto">
          <h2>Contacto</h2>
          <div className="contacto-info">
            <p>Email: {contactoInfo.email}</p>
            {contactoInfo.github && (
              <p>
                <a href={contactoInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App
