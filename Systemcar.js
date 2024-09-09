// Clase Padre Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    // Método para mostrar la información del vehículo
    informacion() {
      console.log(`Vehículo: ${this.marca} ${this.modelo} (${this.año})`);
    }
  
    // Método para encender el vehículo
    encender() {
      console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
  }
  
  // Clase Hija Auto
  class Auto extends Vehiculo {
    constructor(marca, modelo, año, numPuertas) {
      super(marca, modelo, año); // Llama al constructor del padre
      this.numPuertas = numPuertas;
    }
  
    // Sobrescribimos el método encender
    encender() {
      console.log(`El auto ${this.marca} ${this.modelo} está encendido.`);
    }
  
    // Método exclusivo de Auto
    tocarBocina() {
      console.log(`El auto ${this.marca} está tocando la bocina: ¡BEEP BEEP!`);
    }
  }
  
  // Clase Hija Motocicleta
  class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, tipoManillar) {
      super(marca, modelo, año); // Llama al constructor del padre
      this.tipoManillar = tipoManillar;
    }
  
    // Sobrescribimos el método encender
    encender() {
      console.log(`La motocicleta ${this.marca} ${this.modelo} está encendida.`);
    }
  
    // Método exclusivo de Motocicleta
    hacerCaballito() {
      console.log(`La motocicleta ${this.marca} está haciendo un caballito.`);
    }
  }
  
  // Crear instancias de Auto y Motocicleta
  const miAuto = new Auto("Toyota", "Corolla", 2021, 4);
  const miMoto = new Motocicleta("Harley-Davidson", "Iron 883", 2020, "Deportivo");
  
  // Demostrar polimorfismo
  miAuto.informacion();
  miAuto.encender();
  miAuto.tocarBocina();
  
  console.log("\n"); // Salto de línea 
  
  miMoto.informacion();
  miMoto.encender();
  miMoto.hacerCaballito();
  