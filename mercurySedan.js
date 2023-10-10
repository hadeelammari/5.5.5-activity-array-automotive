//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if(this.passengers > this.maximumPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                console.log("Eh, we'll be fine!")
                return this.passenger;
            } 
        } else{
            console.log(this.make + ' ' + this.model + 'is at maximum capacity!')
        }
    }

    start(){
        if(this.fuel > 0){
            console.log("START YOUR ENGINES!!!")
            return this.started = true;
        } else {
            console.log("We're not going anywhere")
            return this.started = false;
        }
    }

    scheduleService(mileage){
        if(this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
}
