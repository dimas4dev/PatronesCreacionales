class Singleton {
    static instance;

    constructor(version) {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.version = version;
        Singleton.instance = this;
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

function main() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log(instance1 === instance2);
}

main();