class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getId() {
        return this.id;
    }
}

class ShoppingCart {
    static shoppingCartInstance = null;
    products = [];

    constructor() {
        if (ShoppingCart.shoppingCartInstance) {
            return ShoppingCart.shoppingCartInstance;
        }
        ShoppingCart.shoppingCartInstance = this;
    }

    add(product) {
        this.products.push(product);
    }

    deleteById(idProduct) {
        this.products = this.products.filter(product => product.id !== idProduct);
    }

    static getInstanceShoppingCart() {
        if (!ShoppingCart.shoppingCartInstance) {
            ShoppingCart.shoppingCartInstance = new ShoppingCart();
        }
        return ShoppingCart.shoppingCartInstance;
    }
}
