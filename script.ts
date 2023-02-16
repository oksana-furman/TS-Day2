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
let arr: any = [];

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
        this.image = image;

        arr.push(this);
    }
    calculateAge(): number{
     let d = new Date;
     let currentYear = d.getFullYear()   
     return currentYear - this.yearOfProduction;
    }
    resultCard(){
        return `<div class="card m-4 allCards" style="width: 18rem; height: 22rem">
        <img src="${this.image}" class="card-img-top" style="height: 40%" alt="${this.brand} ${this.model}">
        <div class="card-body">
          <h5 class="card-title">${this.brand} ${this.model}</h5>
          <p class="card-text">Production year: ${this.yearOfProduction} <br> Fuel type: ${this.fuelType}</p>
          <button class="btn btn-primary moreInfo" data-bs-toggle="modal" data-bs-target="#modalid">See more</button>
        </div>
      </div>
      `
    }
    }
   

class Cars extends Vihecles{
numberOfSeats: number;
color: string;

constructor(brand: string, model: string, yearOfProduction: number,  fuelType: string,  image: string, numberOfSeats: number, color: string){
    super(brand, model, yearOfProduction, fuelType, image);
    this.numberOfSeats = numberOfSeats;
    this.color = color;

}
numSeats() {
    return `Number of seats: ${this.numberOfSeats}`;
}

}

class Motorbikes extends Vihecles{
engineType: string;
boreXstroke: string;
maxHorsepower: string;
constructor(brand: string, model: string, yearOfProduction: number,  fuelType: string,  image: string, engineType: string, boreXstroke: string, maxHorsepower: string){
    super(brand, model, yearOfProduction, fuelType, image);
   this.engineType = engineType;
   this.boreXstroke = boreXstroke;
   this.maxHorsepower = maxHorsepower;
}
calculatePrice() {
    //create a formula based on brand, model, age(super.calculateAge()), fuel type( gasoline or diesel) 
    if(this.fuelType == "gasoline"){
       return 5000 / this.calculateAge() * 5; 
    } else {
        return 3000 / this.calculateAge() * 5; 
    }

}
 resultCard(){
    return `
    <div class="card m-4 allCards" style="width: 18rem; height: 22rem">
        <img src="${this.image}" class="card-img-top" style="height: 40%" alt="${this.brand} ${this.model}">
        <div class="card-body">
          <h5 class="card-title">${this.brand} ${this.model}</h5>
          <p class="card-text">Production year: ${this.yearOfProduction} <br> Fuel type: ${this.fuelType}</p>
                 <button type="button" class="btn btn-primary moreInfo" data-bs-toggle="modal" data-bs-target="#${this.brand}">See more</button>
        </div>
      </div>

    
    <div class="modal fade" id="${this.brand}" tabindex="-1" aria-labelledby="${this.brand}_" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${this.brand}_">${this.brand} ${this.model}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Type of Engine: ${this.engineType}</p>
        <p>Bore x Stroke: ${this.boreXstroke}</p>
        <p>Max Horsepower: ${this.maxHorsepower}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="popover" title="Price" data-bs-content="${this.calculatePrice()}">See the price</button>
      </div>
    </div>
  </div>
</div>`;
}
}


let car1 = new Cars("Honda", "CR-V", 2020, "gasoline", "https://www.cars.com/i/large/in/v2/stock_photos/001ed902-2f64-4015-bfae-882789d2e4c4/d0e55ab8-fda8-4644-a068-5384ade0983e.png", 4, "white");
console.table(car1);
let car2 = new Cars("Toyota", "Camry", 2021, "gasoline", "https://www.buyatoyota.com/config/pub/3d/toyota/1007299/1000854/Exterior/2/680_383_PNG/a0e1759-a37728f-bed43c7-fa3c8c9-5853679-ceddcc3-ac72ff8-c1ced2c-b877bc2-751ae9b-7397be5-52873b1-eae475a-28fb2d8-9230d68-d673d85-855376a-f1136ab-491d990-f3a0eee.png", 4, "red");

let car3 = new Cars("Chevrolet", "Equinox", 2020, "diesel", "https://di-uploads-pod25.dealerinspire.com/hendrickchevyshawneemission/uploads/2019/10/2020-Chevrolet-Equinox-Premier-Hero.png", 4, "grey");

let car4 = new Cars("Volkswagen", "Golf", 2017, "diesel", "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2473/", 4, "black");

let bike1 = new Motorbikes("Aprilia", "Shiver 900", 2018, "gasoline", "https://duvef2pp18fhl.cloudfront.net/images/djmediatools/589-aprilia-shiver-900/09_shiver_900_tech_silver.jpg", "V2, four-stroke, Longitudinal 90° V-twin", "92.0 x 67.4 mm ", "	95.00 HP (69.3 kW)) / 8750 RPM ");

let bike2 = new Motorbikes("Honda", "CRF450L", 2019, "gasoline", "https://images5.1000ps.net/b-f_W3004433-honda-crf450l-2019-636627624208309410.jpg", "450cc liquid-cooled single-cylinder", "96.0mm x 62.1mm", "17.6 kW (23.6 hp; 23.9 PS) / 7,500 rpm");

let bike3 = new Motorbikes("Yamaha", "Sniper 150", 2020, "gasoline", "https://bikeevo.sg/wp-content/uploads/2021/11/yamaha-sniper-150-green.jpg", "4 stroke, Liquid Cooled, SOHC, 4 Valve", "57.0 mm x 58.7 mm", "11.3 kW (15.4 PS) / 8,500 rpm");

let bike4 = new Motorbikes("BMW", "R 1250 GS", 2022, "gasoline", "https://images5.1000ps.net/images_bikekat/2023/7-BMW/9500-R_1250_GS/010-637925203585672143-bmw-r-1250-gs.jpg", "air/liquid-cooled, flat-twin boxer, DOHC, 4 vpc", "102,5 mm x 76 mm", "136 hp (100 kW) / 7,750 rpm");

console.log(arr);

let printCard = document.getElementById("printCard") as HTMLElement;
for(let i=0; i<arr.length; i++){
    printCard.innerHTML += arr[i].resultCard();
    // console.log(arr[i]);
    
}
console.log(bike1.calculatePrice());
