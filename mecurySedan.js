//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass") //vehicleModule must be imported.

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)*/

class Car extends VehicleModule { //You extend from the imported vehicleModule
constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage)
    this.maximumPassengers= 5; 
    this.passenger= 0;
    this.numberOfWheels= 4;
    this.maximumSpeed= 160;
    this.fuel= 10;
    this.schedule= false; 
}
    loadPassenger (num) { //The logic within the function is not correct. 
        //The logic should reflect: if passenger less than maximumPassengers then availableRoom == true
        if (num < 5) { //if (this.passenger < this.maxPassengers && (num + this.passenger) <= this.maxPassengers) {
            //You also need to change this.passenger -> this. passenger = num
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
