//this includes the vehicle class as a module
let Vehicle = require("./vehicleBaseClass")

//this shows how to call from this module...
// let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class mercurySedan extends Vehicle.Vehicle{ // You need to reference the class you are inheriting from
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
    loadPassengers(num){
        if (num + this.passengers < this.maximumPassengers){
            this.passengers = num;
         return this.passengers;
        } else {
            console.log(this.model + this.make + "is full")
        }

        
    }
    
    //kind of blanking if I need to bring the start() method over since it's a method that the class Vehicle does//
    //No need for the start as it will be called from the parent class 
 

    maintainanceRequired(){ // You can not have a property and a method with the same excat name 
        if (this.mileage > 30000){ //When you return the code after the return won't run so your console.log need to be before the return
            console.log("Time for a maintenance request")
            return this.scheduleService = true;
            
        }
        else {
            console.log("Not yet time for a maintenance request")
            return this.scheduleService = false;
            
        }
    }
    
}


let newSedan = new mercurySedan('Mercury', 'Sedan', '2023', 'charcoal', '0');

newSedan.start()
newSedan.loadPassengers(3)
newSedan.maintainanceRequired()







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
