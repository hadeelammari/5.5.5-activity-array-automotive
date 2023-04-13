const Vehicle = require('./vehicle').Vehicle

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        // this.make = "Mercury Sedan";
        // this.model = "A28";
        // this.year = year;
        // this.color = blue;
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.maximumSpeed = 160;
        this.mileage = 10;
        // this.started = true;
        this.numberOfWheels = 4;
        this.scheduleService = false;
    }



    checkService() {
        if (this.mileage > 3000) {
            this.scheduleService
            return this.scheduleService
        }
    }


    start() {
        if (this.fuel > 0) {
            console.log("Engine Started !")
            return this.started = true;
        }
        else {
            console.log("Engine cannot start...");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger, this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + "not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

let myCar = new Car('mercury', 'A-28_sedan', '2004', 'blue', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
