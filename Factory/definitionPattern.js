class BaseCar {
    showCost(){
        throw new Error("Method not implemented")
    }
}

class MastodonCar extends BaseCar {
    showCost(){
        console.log("Mastodon car cost 1000$")
    }
}

class RhinoCar extends BaseCar {
    showCost(){
        console.log("Rhino car cost 2000$")
    }
}

class CarFactory {
    makeCar(){
        throw new Error("Method not implemented")
    }
}

class MastodonCarFactory extends CarFactory {
    makeCar(){
        return new MastodonCar()
    }
}

class RhinoCarFactory extends CarFactory {
    makeCar(){
        return new RhinoCar()
    }
}

function appFactory(factory){
    const car = factory.makeCar()
    car.showCost()
}

appFactory(new MastodonCarFactory()) // Mastodon car cost 1000$
appFactory(new RhinoCarFactory()) // Rhino car cost 2000$

function createFactory(type){
    const factories = {
        mastodon: MastodonCarFactory,
        rhino: RhinoCarFactory
    }

    const Factory = factories[type]
    return new Factory()
}


 appFactory(createFactory("mastodon")) // Mastodon car cost 1000$
 appFactory(createFactory("rhino")) // Rhino car cost 2000$