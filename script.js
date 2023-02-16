var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//basic exercise 1
var Person = /** @class */ (function () {
    function Person(fName, lName, age, jobTitle) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printMsg = function () {
        return "Hello there, My name is ".concat(this.fName, " ").concat(this.lName, ", I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle, ". <br>");
    };
    return Person;
}());
var person1 = new Person("John", "Doe", 30, "doctor");
console.log(person1.printMsg());
var result = document.getElementById("result");
result.innerHTML = person1.printMsg();
//basic exercise 2
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fName, lName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, fName, lName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Employee.prototype.prinNewtMsg = function () {
        return _super.prototype.printMsg.call(this) + " I work at the ".concat(this.jobLocation, " and get ").concat(this.salary, " Euros per month. <br>");
    };
    return Employee;
}(Person));
var employee1 = new Employee("Anna", "Smith", 28, "nurse", 3000, "hospital");
console.log(employee1.prinNewtMsg());
result.innerHTML += employee1.prinNewtMsg();
//end of basic exercises
//advanced exercise
var Vihecles = /** @class */ (function () {
    function Vihecles(brand, model, yearOfProduction, fuelType, image) {
        this.brand = brand;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.fuelType = fuelType;
        this.image = image;
    }
    Vihecles.prototype.calculateAge = function () {
        var d = new Date;
        var currentYear = d.getFullYear();
        return currentYear - this.yearOfProduction;
    };
    return Vihecles;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(brand, model, yearOfProduction, fuelType, image, numberOfSeats) {
        var _this = _super.call(this, brand, model, yearOfProduction, fuelType, image) || this;
        _this.numberOfSeats = numberOfSeats;
        return _this;
    }
    Cars.prototype.calculatePrice = function () {
        //create a formula based on brand, model, age(super.calculateAge()), fuel type( gasoline or diesel) and number of seats
    };
    return Cars;
}(Vihecles));
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorbikes;
}(Vihecles));
