export {serverSettings}

class Settings {
    constructor(){
        if(new.target === Settings){
            throw new TypeError(`${this.constructor.name} cannot be instantiated.\nREASON: It is an abstract class`);
        }
    };

   getServerSettings(){
    throw new TypeError(`${this.getServerSettings.name} is not implemented correctly by a child class`);
   }

   getSecuritySettings(){
    throw new TypeError(`${this.getSecuritySettings.name} is not implemented correctly by a child class`);
   }
   
   getDatabaseSettings(){
    throw new TypeError(`${this.getDatabaseSettings.name} is not implemented correctly by a child class`);
   }
   
   getLoggingSettings(){
    throw new TypeError(`${this.getLoggingSettings.name} is not implemented correctly by a child class`);
   } 
    
}

class serverSettings extends Settings{
    constructor(host = "127.0.0.1", port = 8080, protocol = "http", timeout = 10000){
        super();
        this.host = host; 
        this.port = port;
        this.protocol = protocol;
        this.timeout = timeout;
    }

    getServerSettings(){
        return [this.host, this.port, this.protocol, this.timeout]; 
    }
}