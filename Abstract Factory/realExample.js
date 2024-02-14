
/**
 * Ejemplo de Abstract Factory en React.
 * Este código demuestra cómo implementar el patrón Abstract Factory en React para soportar diferentes temas
 * (por ejemplo, "claro" y "oscuro") con componentes específicos para cada tema.
 */

import React, { useState } from 'react';

/**
 * Componente base Button que seleccionará su implementación concreta basada en el tema actual.
 */
const Button = ({ theme, children }) => {
  const Component = theme.buttonComponent;
  return <Component>{children}</Component>;
};

/**
 * Componente base Card que seleccionará su implementación concreta basada en el tema actual.
 */
const Card = ({ theme, children }) => {
  const Component = theme.cardComponent;
  return <Component>{children}</Component>;
};

/**
 * Implementaciones concretas de componentes para el Tema Claro.
 */
const LightThemeButton = ({ children }) => <button className="light-theme">{children}</button>;
const LightThemeCard = ({ children }) => <div className="light-theme-card">{children}</div>;

/**
 * Implementaciones concretas de componentes para el Tema Oscuro.
 */
const DarkThemeButton = ({ children }) => <button className="dark-theme">{children}</button>;
const DarkThemeCard = ({ children }) => <div className="dark-theme-card">{children}</div>;

/**
 * Abstract Factory que mapea los temas a sus componentes concretos.
 */
const themeFactory = {
  light: {
    buttonComponent: LightThemeButton,
    cardComponent: LightThemeCard,
  },
  dark: {
    buttonComponent: DarkThemeButton,
    cardComponent: DarkThemeCard,
  }
};

/**
 * Componente App que permite al usuario cambiar entre temas y utiliza los componentes Button y Card
 * basados en el tema seleccionado.
 */
function App() {
  const [themeName, setThemeName] = useState('light');
  const currentTheme = themeFactory[themeName];

  return (
    <div>
      <button onClick={() => setThemeName(themeName === 'light' ? 'dark' : 'light')}>
        Cambiar Tema
      </button>
      <Button theme={currentTheme}>Presioname</Button>
      <Card theme={currentTheme}>
        <p>Esta es una tarjeta con el tema {themeName}.</p>
      </Card>
    </div>
  );
}

export default App;
