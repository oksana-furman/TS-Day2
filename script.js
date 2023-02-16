//basic exercise 1
// class Person{
//     fName: string;
//     lName: string;
//     age: number;
//     jobTitle: string;
//     constructor(fName: string, lName: string, age: number, jobTitle: string) {
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//         this.jobTitle = jobTitle;
//     }
//     printMsg() {
//         return `Hello there, My name is ${this.fName} ${this.lName}, I am ${this.age} years old, and I am a ${this.jobTitle}. <br>`
//     }
// }
// let person1 = new Person("John", "Doe", 30, "doctor");
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
// console.log(person1.printMsg());
// let result = document.getElementById("result") as HTMLElement;
// result.innerHTML = person1.printMsg();
// //basic exercise 2
// class Employee extends Person {
//     salary: number;
//     jobLocation: string;
//     constructor(fName: string, lName: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
//         super(fName, lName, age, jobTitle);
//         this.salary = salary;
//         this.jobLocation = jobLocation
//     }
//     prinNewtMsg(): string {
//         return super.printMsg() + ` I work at the ${this.jobLocation} and get ${this.salary} Euros per month. <br>`;
//     }
// }
// let employee1 = new Employee("Anna", "Smith", 28, "nurse", 3000, "hospital");
// console.log(employee1.prinNewtMsg());
// result.innerHTML += employee1.prinNewtMsg();
//end of basic exercises
//advanced exercise
var arr = [];
var Vihecles = /** @class */ (function () {
    function Vihecles(brand, model, yearOfProduction, fuelType, image) {
        this.brand = brand;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.fuelType = fuelType;
        this.image = image;
        arr.push(this);
    }
    Vihecles.prototype.calculateAge = function () {
        var d = new Date;
        var currentYear = d.getFullYear();
        return currentYear - this.yearOfProduction;
    };
    Vihecles.prototype.resultCard = function () {
        return "<div class=\"card m-4 allCards\" style=\"width: 18rem; height: 22rem\">\n        <img src=\"".concat(this.image, "\" class=\"card-img-top\" style=\"height: 40%\" alt=\"").concat(this.brand, " ").concat(this.model, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(this.brand, " ").concat(this.model, "</h5>\n          <p class=\"card-text\">Production year: ").concat(this.yearOfProduction, " <br> Fuel type: ").concat(this.fuelType, "</p>\n          <button class=\"btn btn-primary moreInfo\" data-bs-toggle=\"modal\" data-bs-target=\"#modalid\">See more</button>\n        </div>\n      </div>\n      ");
    };
    return Vihecles;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(brand, model, yearOfProduction, fuelType, image, numberOfSeats, color) {
        var _this = _super.call(this, brand, model, yearOfProduction, fuelType, image) || this;
        _this.numberOfSeats = numberOfSeats;
        _this.color = color;
        return _this;
    }
    Cars.prototype.numSeats = function () {
        return "Number of seats: ".concat(this.numberOfSeats);
    };
    return Cars;
}(Vihecles));
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(brand, model, yearOfProduction, fuelType, image, engineType, boreXstroke, maxHorsepower) {
        var _this = _super.call(this, brand, model, yearOfProduction, fuelType, image) || this;
        _this.engineType = engineType;
        _this.boreXstroke = boreXstroke;
        _this.maxHorsepower = maxHorsepower;
        return _this;
    }
    Motorbikes.prototype.calculatePrice = function () {
        //create a formula based on brand, model, age(super.calculateAge()), fuel type( gasoline or diesel) 
        if (this.fuelType == "gasoline") {
            return 5000 / this.calculateAge() * 5;
        }
        else {
            return 3000 / this.calculateAge() * 5;
        }
    };
    Motorbikes.prototype.resultCard = function () {
        return "\n    <div class=\"card m-4 allCards\" style=\"width: 18rem; height: 22rem\">\n        <img src=\"".concat(this.image, "\" class=\"card-img-top\" style=\"height: 40%\" alt=\"").concat(this.brand, " ").concat(this.model, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(this.brand, " ").concat(this.model, "</h5>\n          <p class=\"card-text\">Production year: ").concat(this.yearOfProduction, " <br> Fuel type: ").concat(this.fuelType, "</p>\n                 <button type=\"button\" class=\"btn btn-primary moreInfo\" data-bs-toggle=\"modal\" data-bs-target=\"#").concat(this.brand, "\">See more</button>\n        </div>\n      </div>\n\n    \n    <div class=\"modal fade\" id=\"").concat(this.brand, "\" tabindex=\"-1\" aria-labelledby=\"").concat(this.brand, "_\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title fs-5\" id=\"").concat(this.brand, "_\">").concat(this.brand, " ").concat(this.model, "</h1>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Type of Engine: ").concat(this.engineType, "</p>\n        <p>Bore x Stroke: ").concat(this.boreXstroke, "</p>\n        <p>Max Horsepower: ").concat(this.maxHorsepower, "</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"popover\" title=\"Price\" data-bs-content=\"").concat(Math.floor(this.calculatePrice()), "\">See the price</button>\n      </div>\n    </div>\n  </div>\n</div>");
    };
    return Motorbikes;
}(Vihecles));
var car1 = new Cars("Honda", "CR-V", 2020, "gasoline", "https://www.cars.com/i/large/in/v2/stock_photos/001ed902-2f64-4015-bfae-882789d2e4c4/d0e55ab8-fda8-4644-a068-5384ade0983e.png", 4, "white");
console.table(car1);
var car2 = new Cars("Toyota", "Camry", 2021, "gasoline", "https://www.buyatoyota.com/config/pub/3d/toyota/1007299/1000854/Exterior/2/680_383_PNG/a0e1759-a37728f-bed43c7-fa3c8c9-5853679-ceddcc3-ac72ff8-c1ced2c-b877bc2-751ae9b-7397be5-52873b1-eae475a-28fb2d8-9230d68-d673d85-855376a-f1136ab-491d990-f3a0eee.png", 4, "red");
var car3 = new Cars("Chevrolet", "Equinox", 2020, "diesel", "https://di-uploads-pod25.dealerinspire.com/hendrickchevyshawneemission/uploads/2019/10/2020-Chevrolet-Equinox-Premier-Hero.png", 4, "grey");
var car4 = new Cars("Volkswagen", "Golf", 2017, "diesel", "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2473/", 4, "black");
var bike1 = new Motorbikes("Aprilia", "Shiver 900", 2018, "gasoline", "https://duvef2pp18fhl.cloudfront.net/images/djmediatools/589-aprilia-shiver-900/09_shiver_900_tech_silver.jpg", "V2, four-stroke, Longitudinal 90° V-twin", "92.0 x 67.4 mm ", "	95.00 HP (69.3 kW)) / 8750 RPM ");
var bike2 = new Motorbikes("Honda", "CRF450L", 2019, "gasoline", "https://images5.1000ps.net/b-f_W3004433-honda-crf450l-2019-636627624208309410.jpg", "450cc liquid-cooled single-cylinder", "96.0mm x 62.1mm", "17.6 kW (23.6 hp; 23.9 PS) / 7,500 rpm");
var bike3 = new Motorbikes("Yamaha", "Sniper 150", 2020, "gasoline", "https://bikeevo.sg/wp-content/uploads/2021/11/yamaha-sniper-150-green.jpg", "4 stroke, Liquid Cooled, SOHC, 4 Valve", "57.0 mm x 58.7 mm", "11.3 kW (15.4 PS) / 8,500 rpm");
var bike4 = new Motorbikes("BMW", "R 1250 GS", 2022, "gasoline", "https://images5.1000ps.net/images_bikekat/2023/7-BMW/9500-R_1250_GS/010-637925203585672143-bmw-r-1250-gs.jpg", "air/liquid-cooled, flat-twin boxer, DOHC, 4 vpc", "102,5 mm x 76 mm", "136 hp (100 kW) / 7,750 rpm");
console.log(arr);
var printCard = document.getElementById("printCard");
for (var i = 0; i < arr.length; i++) {
    printCard.innerHTML += arr[i].resultCard();
    // console.log(arr[i]);
}
console.log(bike1.calculatePrice());
