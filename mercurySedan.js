//this includes the vehicle class as a module
let Vehicle = require("./vehicleBaseClass")

//this shows how to call from this module...
// let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class mercurySedan extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    //not very confident about what i did here vvv
    loadPassenger(num){
        if (num + this.passengers < this.maximumPassengers){
            this.passengers = num;
         return this.passengers;
        } else {
            console.log(this.model + this.make + "is full")
        }

        
    }
    
    //kind of blanking if I need to bring the start() method over since it's a method that the class Vehicle does//
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }

    scheduleService(){
        if (this.mileage > 30000){
            return this.scheduleService = true;
            console.log("Time for a maintenance request")
        }
    }
    
}


let newSedan = new mercurySedan('Mercury', 'Sedan', '2023', 'charcoal', '0');

newSedan.start()
newSedan.loadPassengers(3)
newSedan.scheduleService()







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
