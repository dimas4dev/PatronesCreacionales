import React from 'react';

/**
 * Componente Card que muestra un título y contenido.
 * 
 * @param {Object} props Las propiedades del componente.
 * @param {string} props.title El título de la tarjeta.
 * @param {string} props.content El contenido de la tarjeta.
 * @returns {JSX.Element} JSX del componente Card.
 */
const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

/**
 * Componente App que utiliza el patrón Prototype (a través de clonación de props)
 * para crear múltiples instancias de un componente Card con diferentes propiedades.
 * 
 * Este ejemplo demuestra cómo podemos "clonar" props para reutilizar y personalizar
 * configuraciones de componentes en React, siguiendo un enfoque inspirado en el patrón Prototype.
 * 
 * @returns {JSX.Element} JSX del componente App.
 */
const App = () => {
  // Define el objeto "prototipo" de las props de Card.
  const prototypeCardProps = {
    title: "Título Base",
    content: "Contenido base del card."
  };

  // Clona y personaliza el "prototipo" para crear nuevas "instancias" con diferentes props.
  const card1Props = { ...prototypeCardProps, title: "Card 1", content: "Contenido para Card 1." };
  const card2Props = { ...prototypeCardProps, title: "Card 2", content: "Contenido diferente para Card 2." };

  return (
    <div>
      <Card {...prototypeCardProps} />
      <Card {...card1Props} />
      <Card {...card2Props} />
    </div>
  );
};

export default App;
