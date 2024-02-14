/**
 * Componente funcional WeatherWidget que muestra información del clima.
 * 
 * @returns {JSX.Element} El JSX del Widget del Clima.
 */
function WeatherWidget() {
  return <div>Weather Information</div>;
}

/**
 * Componente funcional NewsWidget que muestra las últimas noticias.
 * 
 * @returns {JSX.Element} El JSX del Widget de Noticias.
 */
function NewsWidget() {
  return <div>Latest News</div>;
}

/**
 * Componente funcional StockWidget que muestra datos del mercado de valores.
 * 
 * @returns {JSX.Element} El JSX del Widget de Mercado de Valores.
 */
function StockWidget() {
  return <div>Stock Market Data</div>;
}

/**
 * Factory function WidgetFactory que crea componentes basados en el tipo especificado.
 * Este es un ejemplo del patrón Factory, el cual permite crear un objeto (en este caso, un componente React)
 * sin especificar la clase exacta del objeto.
 * 
 * @param {Object} props - Propiedades del componente, incluyendo el 'type' que determina el widget a renderizar.
 * @returns {JSX.Element} El componente seleccionado basado en el tipo.
 */
function WidgetFactory({ type }) {
  switch (type) {
    case 'weather':
      return <WeatherWidget />;
    case 'news':
      return <NewsWidget />;
    case 'stock':
      return <StockWidget />;
    default:
      return <div>Unsupported widget type</div>;
  }
}

/**
 * Componente App que utiliza WidgetFactory para renderizar widgets dinámicamente.
 * Demuestra cómo el patrón Factory puede ser utilizado en una aplicación React para crear componentes
 * basados en condiciones dinámicas, como la respuesta de una API o la selección del usuario.
 * 
 * @returns {JSX.Element} El JSX del componente App.
 */
function App() {
  // El tipo podría venir de una API, de la configuración del usuario, etc.
  const widgetType = 'weather'; // Ejemplo: este valor podría ser dinámico

  return (
    <div>
      <h1>My Dashboard</h1>
      <WidgetFactory type={widgetType} />
    </div>
  );
}
