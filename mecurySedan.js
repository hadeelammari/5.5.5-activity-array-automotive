//this includes the vehicle class as a module
// import Vehicle from "./vehicleBaseClass";

//this shows how to call from this module...
let car = new Vehicle ("Mecury", "Sedan", "1965", "color", "mileage");

//to start the car 
car.start();

for (let i = 0; i< 5; i++) {
    car.accelerate();
}

