import Vehicle from "./vehicleBaseClass";

class MercuryA28 Sedan extends Vehicle {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage)  
        this.make = "Mercury Sedan";
        this.model = "A28";
        this.year = year;
        this.color = color;
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.speed = 160;
        this.mileage = 10;
        this.started = false;
        this.numberOfWheels = 4;
    }

    loadPassenger(num){
        let availableRoom = this.passenger < this.maximumPassengers;
        if (availableRoom) {
            this.passengers += num;
            console.log (`${num} passengers loaded`);
        }
    }

    else {
        console.log(`Sorry, no room for ${num} passengers`);
    }
}
    start() {
        if (this.fuel > 0) {
        this.started = true;
        console.log("Engine Started !") 
        } else {
        console.log("Engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}
