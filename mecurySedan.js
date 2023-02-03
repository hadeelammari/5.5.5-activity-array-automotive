//this includes the vehicle class as a module
const VehicleModule = require("C:/Users/baile/SDSU/JS/ASSIGNMENTS/5.5.5-activity-array-automotive/vehicle.js").Vehicle

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);

        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(numOfPassengers){// 
        if(numOfPassengers <= 5){ //The condition should be ((numOfPassengers+this.passenger) <= this.maxPassengers)
            this.passenger = numOfPassengers
            console.log(`There is enough room for everyone!`)
            return this.passenger
        }else{
            numOfPassengers = this.passenger
            console.log(`There is not enough room for that many passengers. The maximun passengers is ${this.maxPassengers}.`)
            return this.passenger
        }
    }

    checkService(){
        if(this.mileage > 30000){
            this.scheduleService = true;
            console.log(`Please schedule service for Vehicle. Maintenance should be done after 30,000 miles. Current Odometer: ${this.mileage}`)
            return this.scheduleService
        }else{
            console.log(`No service required. Next service due after 30,000 miles. Current Odometer: ${this.mileage}`)
            return this.scheduleService
        }
    }

    start(fuelPercentage){
        if(fuelPercentage > 0){
            this.ignition = true;
            console.log(`The car started!`);
            return this.ignition = true;
        }else{
            this.ignition = false;
            console.log(`There is not enough fuel for ignition. The car did not start.`);
            return this.ignition = false;
        }
    }

}

let newCar = new Car('Mercury', 'Sedan', '2000', 'Blue', '25000')

newCar.start(10)
newCar.loadPassenger(5)
newCar.checkService()
