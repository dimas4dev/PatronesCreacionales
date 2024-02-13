class HttAdapterFactory {
    makeAdapter(){
        return new HttpAdapter();
    }
}

class HttpAdapter {
    constructor(typeAdapter){
        this.typeAdapter = typeAdapter;
    }

    get(url){
        console.log(`Getting ${url}`);
    }

    post(url, data){
        console.log(`Posting ${data} to ${url}`);
    }

    put(url, data){
        console.log(`Putting ${data} to ${url}`);
    }

    delete(url){
        console.log(`Deleting ${url}`);
    }
}

const app =()=>{
    const factory = new HttAdapterFactory();
    const adapter = factory.makeAdapter();
    adapter.get("http://www.google.com");
    adapter.post("http://www.google.com", "data");
    adapter.put("http://www.google.com", "data");
    adapter.delete("http://www.google.com");
}

app();