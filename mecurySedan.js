/*//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)*/

class Car extends Vehicle {
constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage)
    this.maximumPassengers= 5; 
    this.passenger= 0;
    this.numberOfWheels= 4;
    this.maximumSpeed= 160;
    this.fuel= 10;
    this.schedule= false; 
}
    loadPassenger (num) {
        if (num < 5) {
            this.availableRoom= true
            return this.availableRoom
        }else {
            this.availableRoom = false
            return this.availableRoom

        }

    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }

    scheduleService (mileage) {
        if (mileage > 30000) {
            this.timeForMaintenance = true
            return this.timeForMaintenance
        }


    }
}

    let myCar = new Car("Array Automtive", "A28 Mercury Sedan", 2018, "silver", 5000)

    myCar.start() 
    myCar.accelerate()
    myCar.stop()
    myCar.accelerate()