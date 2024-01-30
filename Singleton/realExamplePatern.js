class ApiClient {
    static instance;

    constructor(baseUrl) {
        if (ApiClient.instance) {
            return ApiClient.instance;
        }

        this.baseUrl = baseUrl;
        ApiClient.instance = this;
    }

    async get(path) {
        try {
            const response = await fetch(this.baseUrl + path);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Puedes agregar aquí más métodos para POST, PUT, DELETE, etc.
}

// Creando la instancia Singleton con la URL base de la API
const apiClient = new ApiClient('https://miapi.com/v1/');

// En otro lugar del código, cuando necesitas hacer una petición GET
const sameApiClient = new ApiClient('https://miapi.com/v2/');
sameApiClient.get('/ruta-de-recurso')
    .then(data => console.log(data))
    .catch(error => console.error(error));

console.log(apiClient);
console.log(sameApiClient); 
console.log(apiClient === sameApiClient); // true, son la misma instancia

