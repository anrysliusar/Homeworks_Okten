//task 1
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//**********************************************************************************************************************
let dog = {
    breed : 'Labrador Retriever',
    colour : 'white',
    age : 1,
    size : 'medium',
    weight : 20
};

let human = {
    name : 'Petro',
    hobby : 'football',
    isMarried : false,
    age : 18,
    height : 175
}

let car = {
    manufacturer : 'Toyota',
    engine : 'internal combustion',
    door: 5,
    wheel : 4,
    colour : 'black'
};

let flat = {
    numOfRoom : 2,
    square : 50,
    window : 3,
    colourWall : 'grey',
    hasFurniture : false
};

let book = {
    name : 'The 7 Habits of Highly Effective People',
    author : 'Stephen R. Covey',
    country : 'USA',
    subject	: 'Self-help',
    publicationDate	: 1989
}

//task2
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
//**********************************************************************************************************************

let arr = []
for (let i = 0; i < 5; i++) {
    arr.push(dog);
}
console.log(arr);

arr = []
for (let i = 0; i < 5; i++) {
    arr.push(human);
}
console.log(arr);

arr = []
for (let i = 0; i < 5; i++) {
    arr.push(car);
}
console.log(arr);

//task 3
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//**********************************************************************************************************************

let house = {
    roof : {frame : 'wooden' , roofing : 'slate'},
    window : ['wooden', 'plastic'],
    numOfFloor : 2,
    colour : 'green',
    door : 1,
};

let driver = {
    category : ['A', 'A1', 'B', 'B1', 'C1'],
    ownCar : {sedan : 'Ford Mondeo', crossover : 'Kia Sportage'},
    experience : 5,
    isValidLicense : true,
    hasCarCrash : false
}

let toy = {
    name : 'barbie',
    gender : 'Female',
    material : ['rubber', 'plastic'],
    smartOptions : {hasHandTurn : true, canSing : false},
    colour : 'multicolored'
}

let table = {
    material : ['wooden', 'glass'],
    stokke : {hasAdditionSection : true, colour : 'dark'},
    length : 2,
    width : 1,
    leg : 4
}

let bag = {
    material : ['skin', 'cloth'],
    zipper : {material : 'metal', colour : 'grey'},
    size : 'medium',
    hasHandle : true,
    numSection : 3
}

//task 4
//Дан массив:
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//- статус Андрія
//- статус Максима
//- ім'я передостаннього об'єкту
//- ім'я третього об'єкта
//- вік Олега
//- вік Олі
//- вік + ім'я 5го об'єкта
//- вік + сатус Анни
//**********************************************************************************************************************


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(users[7].status);
console.log(users[4].status);
console.log(users[users.length - 2].name);
console.log(users[2].status);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[4].age + users[4].name);
console.log(`${users[5].age} ${users[5].status}`);

//task 5
//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
//**********************************************************************************************************************

let rules = document.getElementById('rules')
console.log(rules);

let content = document.getElementById('content')
console.log(content)

rules.innerText = '******************'
content.innerText = '################'

colour1 = 'red'
colour2 = 'blue'
rules.style.backgroundColor = colour1
content.style.backgroundColor = colour1

for (let i = 1; i < 5; i++) {
    rule = document.getElementsByClassName(`fc_rules rule${i}`)
    for (let j = 0; j < rule.length; j++) {
        rule[j].style.backgroundColor = colour1
    }
}

rules.style.color = colour2
content.style.color = colour2

for (let i = 1; i < 5; i++) {
    rule = document.getElementsByClassName(`fc_rules rule${i}`)
    for (let j = 0; j < rule.length; j++) {
        rule[j].style.color = colour2
    }
}

rules_id = document.getElementById('rules')
console.log(rules_id.classList);;

fcRules = document.getElementsByClassName('fc_rules')
console.log(fcRules);
for (let fcRulesElem of fcRules) {
    fcRulesElem.style.color = colour1
}