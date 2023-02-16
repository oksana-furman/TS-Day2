class Person{
    fName: string;
    lName: string;
    age: number;
    jobTitle: string;
    constructor(fName: string, lName: string, age: number, jobTitle: string) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle
    }
    printMsg() {
        return `Hello there, My name is ${this.fName} ${this.lName}, I am ${this.age} years old, and I am a ${this.jobTitle}. <br>`
    }
}
let person1 = new Person("John", "Doe", 30, "doctor");

console.log(person1.printMsg());

let result = document.getElementById("result") as HTMLElement;
result.innerHTML = person1.printMsg();

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