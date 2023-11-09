const arrayOne = ["One", "Two", "Three", "Four", "Five"];
const arrayTwo = ["Six", "Seven", "Eight", "Nine", "Ten"];
const mergeArray = [...arrayOne, ...arrayTwo];
console.log(mergeArray);
const address = {
    city: "Madinah",
    country: "KSA"
}
const address2 = {
    name: "Kuwait",
    currency: "Dinar",
    greeting: function () {
        return `${this.name}`
    }
}
//console.log(address2.greeting())
class Animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return("Eat!")
    }
    sleep(){
        return("Sleep")
    }
    wakeUp(){
        return("Wakeup")
    }
}
class Cat {
    constructor (breed){
        this.breed=breed
    }
    logBreed(){
        return("Breed!")
    }
}
const rami = new Cat("Cat");
rami.logBreed();
console.log(rami)