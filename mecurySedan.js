// let { MercuryA28Sedan} = require('./mercuryA28Sedan')

// //Mercury boject 
// let car = new MercuryA28Sedan ("Mecury", "Sedan", "1965", "blue", "0");

// car.loadPassenger(3);

// //start engine 
// car.start()

// //schedule maintenance 

// car.scheduleService(4000)


class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage)  
        // this.make = "Mercury Sedan";
        // this.model = "A28";
        // this.year = year;
        // this.color = blue;
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.speed = 160;
        this.mileage = 10;
        // this.started = true;
        this.numberOfWheels = 4;
        this.scheduleService = false;   
    }
}


checkService(){
    if( this.mileage > 3000){
        this.scheduleService;
        return.this.scheduleService;
    }
}


start() {
    if (this.fuel > 0) {
    console.log("Engine Started !") 
    return.this.started = true;
    } 
    else {
    console.log("Engine cannot start...");
    return this.started = false;
    }
}