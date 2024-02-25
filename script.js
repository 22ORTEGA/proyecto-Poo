//clase principa - atributos

class Aviones {
    constructor (modelo, tipo, alas) {
        this.modelo = modelo
        this.tipo = tipo
        this.alas = alas
    }   
// metodos
    despegar() {
        console.log("El " + this.modelo + " tipo" + this.tipo + " despega con el capitan y su copiloto aeronautico");
    }
     aterrizar() {
        console.log("El " + this.modelo + " tipo" + this.tipo + " aterriza en el aeropuerto el Dorado de Bogota DC");
        
           }
} 

const helicopt = new Aviones('helicoptero', ' vth55', 'largas');
helicopt.despegar();
helicopt.aterrizar();

// herencia (1)

class helicoptero extends Aviones {
     constructor (modelo,tipo,alas,toneladas){
        super(modelo,tipo,alas);
        this.toneladas = toneladas
     }

volar() {
    console.log("El avion de " + this.tipo + " lleva " + this.toneladas + " toneladas de mercancia y" + " vuela a 1000 pies de altura con sus " + this.alas + " extra largas");

}
}
const hl = new helicoptero ("rh45", "carga"," alas ", 10 );
hl.volar();



// herencia (2)
class avioneta extends Aviones {
    constructor (modelo,tipo,alas,tiposport){
        super(modelo,tipo,alas);
        this.tiposport = tiposport;
    }

    
acelerar() {
    console.log("La avioneta de modelo " + this.modelo + " de "  +  this.tipo + this.tiposport, " acelera a 300 kilometros por hora con las ", this.alas);

}
}

const av = new avioneta ("W1234", "referencia pequeña", "alas cortas", " tipo sport")
av.acelerar();



// herencia (3)
class guerra extends Aviones {
    constructor (modelo,tipo,alas,alcance){
        super(modelo,tipo,alas);
        this.alcance = alcance;   
    }
   
    apunta() {
        console.log("El boeing jet modelo " + this.modelo + this.tipo, " tiene un ",  this.alcance, " con sus ",  this.alas, "y de potencia extra turbo");
    }
}

const gue = new guerra ("f-15ex", " tipo combate", "alas largas", "alcance de apuntar de 1000k/m")
gue.apunta();
