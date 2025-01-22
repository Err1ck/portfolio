import React from "react";

interface CardsProps {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen?: string;
  url?: string;
}

export const Proyecto: React.FC<CardsProps> = ({
  titulo,
  descripcion,
  tecnologias,
  imagen,
  url,
}) => {
  return (
    <article className="proyecto-card">
      {imagen && <img src={imagen} alt={titulo} />}
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <div className="tecnologias">
        {tecnologias.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Ver proyecto
        </a>
      )}
    </article>
  );
};
