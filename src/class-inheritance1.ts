class Animal {
    animalName : string = "puppy";
    private aName : string = "Mani";
    constructor(){

    }
    move(distanceInMeter : number = 0){
        console.log(`Animal moved ${distanceInMeter}m.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log("Woof! woof!");
    }
}

const dog = new Dog();
dog.animalName = "Temp";
dog.bark();
dog.move(10);