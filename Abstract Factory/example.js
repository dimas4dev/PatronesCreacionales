// Definición de las interfaces de fábrica abstracta
class AbstractFactory {
    createProductA() {}
    createProductB() {}
  }
  
// Definición de productos para la Familia 1
class ProductA1 {
    display() {
      console.log('ProductA1');
    }
  }
  
  class ProductB1 {
    display() {
      console.log('ProductB1');
    }
  }
  
  // Definición de productos para la Familia 2
  class ProductA2 {
    display() {
      console.log('ProductA2');
    }
  }
  
  class ProductB2 {
    display() {
      console.log('ProductB2');
    }
  }
  
  
  // Implementación concreta de las fábricas
  class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
      return new ProductA1();
    }
  
    createProductB() {
      return new ProductB1();
    }
  }
  
  class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
      return new ProductA2();
    }
  
    createProductB() {
      return new ProductB2();
    }
  }
  
  // Uso del Abstract Factory
  function clientCode(factory) {
    const productA = factory.createProductA();
    productA.display(); // Ahora se llama a un método 'display' en lugar de 'function'
    
    const productB = factory.createProductB();
    productB.display(); // Igualmente aquí
  }
  
  // Creación de una fábrica concreta y uso de sus productos
  const factory1 = new ConcreteFactory1();
  clientCode(factory1);
  
  const factory2 = new ConcreteFactory2();
  clientCode(factory2);
  