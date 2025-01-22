import React from "react";

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

const Home: React.FC = () => {
  const proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: "Mi Primer Proyecto",
      descripcion: "Descripción del proyecto",
      tecnologias: ["React", "TypeScript", "CSS"],
    },
  ];

  const contactoInfo: ContactoInfo = {
    email: "tu@email.com",
    github: "https://github.com/Err1ck",
  };

  return (
    <div className="page-container">
      <h1>Página Principal</h1>
      <div className="Home">
        <header className="Home-header">
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
                  <a
                    href={contactoInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
