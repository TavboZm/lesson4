
//констранты не меняются 
const c=7; 
const d=3;

console.log(c);
console.log(d);

//переменные меняются 
let a, b;
console.log(a);
console.log(b);
a=8;
b="2"; //строковый тип 
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

//логгический тип 
let t= true; //правда булево (boolean) значение
let f= false; //ложь булево (boolean) значение  

console.log(t);
console.log(typeof t);
console.log(f);
console.log(typeof f);

let arr= [1,2,3,4,5]; //массив
console.log(arr);
console.log(typeof arr); 

//основные операторы
let A=10;
let B=22;
let C= A+B; //сложение 
console.log(C);
C= A-B; //вычитание
console.log(C);
C= A*B; //умножение
console.log(C);
C= A/B;
console.log(C);

// Массивы
let arrNames = ["Аня", "Галя", "Борис"];
console.log(arrNames);

arrNames.unshift("Данил");
arrNames.push("Вася");

arrNames = arrNames.sort();

console.log(arrNames[0]);
console.log(arrNames[1]);
console.log(arrNames[2]);

console.log(arrNames);

// Условия
if (true) {
  console.log("Это правда!");
}
if (3 == 3) {
  console.log("3 == 3 – Это правда!");
}

if (3 == 4) {
  console.log("3 == 4 – Это правда!");
} else {
  console.log("3 == 4 – Это НЕ правда!");
}

if (3 > 4) {
  console.log("3 > 4 – Это правда!");
} else if (3 < 4) {
  console.log("3 < 4 – Это правда!");
} else {
  console.log("3 не больше и не меньше 4");
}

let user = "Админ";
if (3 == 4 || user == "Админ") {
  // || это OR, т.е. логическое ИЛИ.
  // && это AND - Логический оператор «И»
  console.log("3 == 4 – Это правда! (Админу)");
}

//Циклы

// i = i + 1;
// i++;

for (let i = 0; i < 5; i++) {
  if (i > 2) {
    console.log("ПРИВЕТ " + i);
  } else {
    console.log("привет " + i);
  }
}

let day = 0;
while (day < 7) {
  console.log(day);
  day++;
}

let arrNames2 = ["Иван", "Мария", "Алексей"];
arrNames2.forEach(function (name, i) {
  console.log(">" + name + " " + i + "<");
});

console.log("Количество элементов: " + arrNames2.length);

for (let i = 0; i < arrNames2.length; i++) {
  const name = arrNames2[i];
  console.log(">" + name + "<");
}

//Функции

function showName(name) {
  if (!name || typeof name !== "string") {
    console.log("Это не имя");
  } else {
    console.log(">" + name + "<");
  }
}

showName("Алиса");
showName(333);
showName("Салют");
showName("Сири");

let myObj = {
  name: "Ivan",
  age: 44,
  friends: ["Кристина", "Галя", "Андрей", "Лена"],
  car: {
    model: "BMW",
    year: 2025,
    beep: function () {
      alert("BEEP");
    },
  },
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.car);
console.log(myObj.car.year);
//console.log(myObj.car.beep());

/*
    Document Object Model (DOM)
*/

let forMe = document.getElementById("element1");
console.log(forMe);
forMe.style.color = "red";

const newElement = document.createElement("h1");
newElement.innerText = "Заговоловк страницы";
document.body.appendChild(newElement);

const namesList = ["Вася", "Валя", "Вера", "Витя", "Виталик"];

setInterval(() => {
  newElement.innerText =
    "Привет " + namesList[Math.floor(Math.random() * namesList.length)];
}, 1000);

/*
Функциональное программирование
*/

/*
События
*/

/*
Объектно ориентированное программирование
*/
