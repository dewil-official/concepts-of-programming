class BasicCar {

  brand: string;
  model: string;
  speed: number = 0;
  acceleration: number = 20;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  accelerate(): string {
    this.speed = this.speed + this.acceleration;
    return `${this.brand} ${this.model} is driving ${this.speed}`
  }

  decelerate(): string {
    this.speed >= this.acceleration ? this.speed - this.acceleration : this.speed = 0;
    return `${this.brand} ${this.model} is driving ${this.speed}`
  }

}

class FastCar extends BasicCar {

  // Overrides variable
  acceleration = 40;

  // Adds method
  shoutOutOfTheWindow (): void {
    console.log("Opening window...")
    setTimeout(() => {
      console.log("You shouted: YOU LOOSERS ARE TOO SLOW!")
      console.log("Closing window again...")
    }, 1000)
  }

  /* Inherits all the rest */

}

/* RUNNING IT! */

const car = new BasicCar("Ford", "Focus");
const fasterCar = new FastCar("Daimler", "E-Coupé");

// The fasterCar is faster. Variable got overwritten.
console.log(car.accelerate());
console.log(fasterCar.accelerate());

// This method is only available on the FastCar
fasterCar.shoutOutOfTheWindow();
