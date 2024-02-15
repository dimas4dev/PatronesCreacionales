/**
 * Representa la clase base para un coche tipo Hatchback. Esta clase
 * proporcionará la estructura básica de un coche Hatchback que luego
 * puede ser personalizado por líneas de producción específicas.
 */
class HatchbackCar {
    constructor() {
        this.airBags = 0;
        this.color = '';
        this.edition = '';
    }
}

/**
 * Clase base para la línea de producción de Hatchback. Define los métodos
 * que todas las líneas de producción de Hatchback deben implementar.
 */
class HatchbackProductionLine {
    setAirBags(howMany) {
        throw new Error('Method not implemented!');
    }

    setColor(color) {
        throw new Error('Method not implemented!');
    }

    setEdition(edition) {
        throw new Error('Method not implemented!');
    }

    resetProductionLine() {
        throw new Error('Method not implemented!');
    }
}

/**
 * Implementación específica de la línea de producción para la versión deportiva
 * de un coche Hatchback. Extiende HatchbackProductionLine para personalizar
 * coches Hatchback con características deportivas.
 */
class SportVersionLine extends HatchbackProductionLine {
    constructor({ modelToCustomizeInLine }) {
        super();
        this.modelToCustomizeInLine = modelToCustomizeInLine;
        this.hatchbackCar = null;
        this.resetProductionLine();
    }

    setAirBags(howMany) {
        this.hatchbackCar.airBags = howMany;
        return this;
    }

    setColor(color) {
        this.hatchbackCar.color = color;
        return this;
    }

    setEdition(edition) {
        this.hatchbackCar.edition = edition;
        return this;
    }

    /**
     * Inicializa o reinicia la línea de producción con un nuevo HatchbackCar,
     * listo para ser personalizado.
     */
    resetProductionLine() {
        this.hatchbackCar = new HatchbackCar();
    }

    /**
     * Finaliza el proceso de personalización y retorna el coche Hatchback
     * personalizado. Reinicia la línea de producción para el próximo coche.
     * @returns {HatchbackCar} El coche Hatchback personalizado.
     */
    build() {
        const sportCar = this.hatchbackCar;
        this.resetProductionLine(); // Prepararse para el próximo coche.
        return sportCar;
    }
}
