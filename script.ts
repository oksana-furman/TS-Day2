//basic exercise 1
class Person{
    fName: string;
    lName: string;
    age: number;
    jobTitle: string;
    constructor(fName: string, lName: string, age: number, jobTitle: string) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printMsg() {
        return `Hello there, My name is ${this.fName} ${this.lName}, I am ${this.age} years old, and I am a ${this.jobTitle}. <br>`
    }
}
let person1 = new Person("John", "Doe", 30, "doctor");

console.log(person1.printMsg());
let result = document.getElementById("result") as HTMLElement;
result.innerHTML = person1.printMsg();

//basic exercise 2
class Employee extends Person {
    salary: number;
    jobLocation: string;
    constructor(fName: string, lName: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
        super(fName, lName, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation
    }
    prinNewtMsg(): string {
        return super.printMsg() + ` I work at the ${this.jobLocation} and get ${this.salary} Euros per month. <br>`;
    }
}

let employee1 = new Employee("Anna", "Smith", 28, "nurse", 3000, "hospital");
console.log(employee1.prinNewtMsg());
result.innerHTML += employee1.prinNewtMsg();
//end of basic exercises


//advanced exercise
class Vihecles{
    brand: string;
    model: string;
    yearOfProduction: number;
    fuelType: string;
    image: string;
    constructor(brand: string, model: string, yearOfProduction: number,  fuelType: string,  image: string){
        this.brand = brand;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.fuelType = fuelType;
        this.image = image
    }
    calculateAge(): number{
     let d = new Date;
     let currentYear = d.getFullYear()   
     return currentYear - this.yearOfProduction;
    }
}

class Cars extends Vihecles{
numberOfSeats: number;

constructor(brand: string, model: string, yearOfProduction: number,  fuelType: string,  image: string, numberOfSeats: number){
    super(brand, model, yearOfProduction, fuelType, image);
    this.numberOfSeats = numberOfSeats;
}
calculatePrice() {
    //create a formula based on brand, model, age(super.calculateAge()), fuel type( gasoline or diesel) and number of seats

}
}
class Motorbikes extends Vihecles{

    
}



