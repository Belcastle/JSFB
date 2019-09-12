//Functions

//Function Declaration
//Can be called before it is defined
walk();
function walk() {
  console.log("walk");
}
//Function Expression (Anonymous)
//Cannot be called before it is defined
//run(); //Here it would give an error
let run = function() {
  console.log("run");
};
run();
let move = run;
move();

//Con cualquier número de argumentos
//(rest operator ...args) Siempre debe ir al final
function sum(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    items = [...items[0]];
  }
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5, 10));
function sumDis(discount, ...args) {
  const total = args.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sumDis(0.2, 20, 30, 50));

//Default values
function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}
//despues de asignar el default, los siguientes tambien deben tener default
function interest2(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

//Getters and Setters
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullname() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullname(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
try {
  person.fullname = "Belén Fuentes"; //setter
} catch (e) {
  alert(e);
}
console.log(person.fullname); //getter

/*
//Exer movies
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

//All the movies with rating > 4
//Sort them by their rating desc
//pick their title

const mov = movies
  .filter(value => value.rating > 4 && value.year === 2018)
  .sort((a, b) => a.rating - b.rating)
  .reverse();
mov.forEach(element => {
  console.log(element.title);
});
const mosh = movies
  .filter(value => value.rating > 4 && value.year === 2018)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(value => value.title);
console.log(mosh);

//Exer GetMax
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1];
const max = getMax(numbers);
console.log(max);
function getMax(array) {
  if (array.length === 0) return undefined;
  let maximum = 0;
  const sum = array.reduce((accumulator, currentValue) => {
    const ocurrence = currentValue > maximum ? (maximum = currentValue) : 0;
    const mosh = currentValue > accumulator ? currentValue : accumulator;
    // console.log(ocurrence);
    return maximum;
  }, 0);
  return sum;
  // let maximum = 0;
  // for (let val of array) {
  //   if (val > maximum) {
  //     maximum = val;
  //   }
  // }
  // return maximum;
}

//Exer number of ocurrences
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1];
const count = countOcurrences(numbers, 1);
console.log(count);
function countOcurrences(array, searchElement) {
  const sum = array.reduce((accumulator, currentValue) => {
    const ocurrence = currentValue === searchElement ? 1 : 0;
    return accumulator + ocurrence;
  }, 0);
  // let sum = 0;
  // for (let val of array) {
  //   if (val === searchElement) {
  //     sum++;
  //   }
  // }
  return sum;
}

function clog(obj) {
  console.log(obj);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const output = move(numbers, 1, -2);
clog(output);

function move(array, index, offset) {
  // try {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
  // numbers.splice(index, 1);
  // numbers.splice(index + offset, 0, temp);
  // // array[index] = array[index + offset];
  // return array;
  // } catch {
  //   console.error("Invalid offset");
  // }
}

//Exer except array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const output = except(numbers, [1, 2]);

clog(output);

function except(array, excluded) {
  for (let val of excluded) array = array.filter(value => value !== val);
  return array;
}


//Exer Array from range

const numbers = arrayFromRange(-5, 5);
clog(numbers);

function arrayFromRange(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}
//Arrays
//add to an array
let numbers = [3, 4, 1];
numbers.push(5, 6); //Adds at the end
numbers.pop(); // Removes at the end
numbers.unshift(1, 2); //Adds at the beggining
numbers.shift(); //Removes at the beggining
numbers.splice(2, 0, "a", "b"); // Adds in the middle
numbers.splice(2, 1); // Removes from index 2 one value
console.log(numbers);
numbers = []; //Empties the array
numbers.length = 0; //Empties the array
numbers.splice(0, numbers.length); //Empties the array
while (numbers.length > 0) {
  numbers.pop();
} //Empties the array

const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const combined2 = [...first, ...second];
const slice = combined.slice(2); //(a,b) hace que termine en b
console.log(combined);
console.log(combined2);
console.log(slice);

//indexOf devuelve -1 si no existe
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));

const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];
const course = courses.find(function(course) {
  return course.name === "a";
}); //devuelve el primero que cumpla los criterios
//find y findIndex
const course2 = courses.find(course => course.name === "a");
console.log(course);
console.log(course2);

const numbs = [2, 1, 3];
numbs.sort();
// numbs.reverse();
const joined = numbs.join(","); //devuelve 1,2,3

const numbers2 = [1, -1, 2, 3];
const atLeastOnePositive = numbers2.some(value => {
  return value > 0;
}); // Devuelve si un al menos uno es positivo, y deja de chequear el resto

const allPositive = numbers2.every(value => {
  return value > 0;
}); //Devuelve si todos los valores son positivos

const filtered = numbers2.filter(value => value >= 0); // filtra dependiendo de lo escrito en la función, los excluye

const map = filtered.map(n => "<li>" + n + "</li>");
const mapObject = filtered.map(n => ({ value: n }));
const html = "<ul>" + map.join("") + "</ul>";

//Los siguientes dos hacen lo mismo
const number = [null, -1, 2, 3];
let sum = 0;
for (const n of number) {
  sum += n;
}
console.log(sum);

const sum2 = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
//Si no se especifica el primer valor (0) se usa el primer elemento del array
console.log(sum2);

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    {
      author: "a",
      body: "b"
    },
    {
      author: "c",
      body: "d"
    }
  ],
  isLive: true
};

//Equality (used with the code in Address object)
let addr1 = new Address("a", "b", 1);
let addr2 = new Address("a", "b", 1);
function areEqual(address1, address2) {
  return (
    addr1.city === addr2.city &&
    addr1.street === addr2.street &&
    addr1.zipCode === addr2.zipCode
  );
}
function areSame(address1, address2) {
  return address1 === address2;
}
console.log(areSame(addr1, addr2));
console.log(areEqual(addr1, addr2));
//Exer Address Object
function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}
const address = new Address("Los nogales", "Santiago", 2030010);
function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}
const address2 = createAddress("Los nogales", "Santiago", 2030010);
showAddress(address2);
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}
//Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(1); //Like c# or JAVA
circle.color = "yellow"; //Agrega atributos
delete circle.color; //Borra atributo
const another = { ...circle }; //Clone object (spread operator)

//Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  };
}
const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(1);
console.log(circle1);

// Object-oriented proggramins (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log("draw");
  }
};
circle.draw();

//Exer Primes
showPrimes(20);

function showPrimes(limit) {
  for (let num = 2; num <= limit; num++) {
    let prime = true;

    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(num);
    }
  }
}

//Exer stars
showStars(5);

function showStars(rows) {
  let stars = "";
  for (let i = 0; i < rows; i++) {
    stars += "*";
    console.log(stars);
  }
}
//Exer properties
const movie = {
  title: "Title",
  releaseYear: 2008,
  rating: 4.5,
  director: "Director"
};
showPropeties(movie);
function showPropeties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(obj[key]);
    }
  }
}
//Exer Count truthy
const array = [1, 2, 3, 4, null, ""];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  array.forEach(element => {
    if (element) {
      count++;
    }
  });
  return count;
}

//Exer Even Odd
showNumbers(15);
function showNumbers(limit) {
  for (let index = 0; index <= limit; index++) {
    if (index % 2 === 0) {
      console.log(index + ": Even");
    } else {
      console.log(index + ": Odd");
    }
    const mess = index % 2 === 0 ? "Even" : "Odd";
    console.log(index, mess);
  }
}

//Exer Demerit points
// Limit = 70
// Every 5 extra => 1 point
// 12 points = suspended license
console.log(checkSpeed(74));
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return "Está bien";
  else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points < 12) return "Points: " + points;
    else return "License suspended";
  }
}

//Exer FizzBuzz
// Div 3 => Fizz
// Div 5 => Buzz
// Div 3 & 5 => FizzBuzz
// Not div 3 | 5 => Numero
// No number => 'Not a number'
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
  if (typeof input != "number") return "NaN";
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else if (input % 3 !== 0 && input % 5 !== 0) return input;
}

//Exer landscape
function isLandscape(width, height) {
  return width > height; //No es necesario ? true : false
}
console.log(isLandscape(300, 200));

//Exer max out of two
function max(a, b) {
  return (num = a > b ? a : b);
}
console.log(max(3, 3));
//Exer swap
let a = "red";
let b = "blue";
// let ar=[a,b];
// //swap
// a=ar[1];
// b=ar[0];
let c = a;
a = b;
b = c;

console.log("Valor a: " + a);
console.log("Valor b: " + b);

//points
let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

//Flecha con parametro
let greet = nombre => {
  console.log("Heya " + nombre + "!");
};
greet("Cinco"); //Sin parametro -> greet.call();

//Obj
let person = {
  nombre: "Nombre",
  edad: 18
};
person.nombre = "Otro";
person["nombre"] = "Este";
console.log(person.nombre);
*/
