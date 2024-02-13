// WeatherWidget.js
function WeatherWidget() {
    return <div>Weather Information</div>;
  }
  
  // NewsWidget.js
  function NewsWidget() {
    return <div>Latest News</div>;
  }
  
  // StockWidget.js
  function StockWidget() {
    return <div>Stock Market Data</div>;
  }


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


  // App.js o cualquier componente que necesite renderizar widgets dinámicamente
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