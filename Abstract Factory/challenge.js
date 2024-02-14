class CPU {
    setSeries(serie){
        console.log(`CPU series is set to ${serie}`);
    }
}

class Memory {
    setCapacityInGB(capacity){
        console.log(`Memory capacity is set to ${capacity} GB`);
    }
}

class Display {
    setResolution(resolution){
        console.log(`Display resolution is set to ${resolution}`);
    }
}

class AbstractFactory {
    createCPU() {}
    createMemory() {}
    createDisplay() {}
}

class PhoneFactory extends AbstractFactory {
    createCPU() {
        return new CPU();
    }

    createMemory() {
        return new Memory();
    }

    createDisplay() {
        return new Display();
    }
}

class LaptopFactory extends AbstractFactory {
    createCPU() {
        return new CPU();
    }

    createMemory() {
        return new Memory();
    }

    createDisplay() {
        return new Display();
    }
}

class TabletFactory extends AbstractFactory {
    createCPU() {
        return new CPU();
    }

    createMemory() {
        return new Memory();
    }

    createDisplay() {
        return new Display();
    }
}

function clientCode(factory, cpuValue, memoryValue, displayValue) {
    const cpu = factory.createCPU();
    cpu.setSeries(cpuValue);

    const memory = factory.createMemory();
    memory.setCapacityInGB(memoryValue);

    const display = factory.createDisplay();
    display.setResolution(displayValue);
}

const phoneFactory = new PhoneFactory();
clientCode(phoneFactory, 'Snapdragon', 8, '1080x1920');

const laptopFactory = new LaptopFactory();
clientCode(laptopFactory, 'Intel', 16, '1920x1080');

const tabletFactory = new TabletFactory();
clientCode(tabletFactory, 'Snapdragon', 4, '800x1280');