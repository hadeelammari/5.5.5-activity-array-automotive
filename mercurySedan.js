//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, milage) {
        super(make, model, year, color, milage);
        this.maxPass = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        
    }


    maintenance(milage) {
        if (milage > 30000) {
            this.scheduleService = true;
            console.log('Time for a checkup');
        }
        return this.scheduleService;
    }

    begin() {
        if (fuel > 0) {
            this.start = true;
            console.log('Car engine on')
            return this.start;
        }
        else {
            this.start = false;
            console.log('Fuel too low');
            return this.start;
        }
    }

    loadPassenger(num) {
        if (num > 5) {
            console.log('The car is full');
        }
        else {
            console.log('There is space');
        }
    }
}

let myCar = new Car("Mercury", "Sedan", "2005", "green", "60000");

myCar.start()
myCar.loadPassenger(7)
myCar.stop()
myCar.maintenance()

console.log(myCar)












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
