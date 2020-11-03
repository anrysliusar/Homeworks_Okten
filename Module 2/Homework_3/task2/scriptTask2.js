//task 1
//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//**********************************************************************************************************************

let dog = {
    breed : 'Labrador Retriever',
    age : 1,
    weight : 20
};

let human = {
    name : 'Petro',
    hobby : 'football',
    isMarried : false,
    height : 175
}

let car = {
    manufacturer : 'Toyota',
    engine : 'internal combustion',
    wheel : 4,
    colour : 'black'
};

let laptop = {
    screen : 'IPS',
    keyboard : 'virtual',
    isTouchpad : true
}

let house = {
    height: 30,
    wall : 'wooden',
    door : 'metal'
};

//task 2
//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//**********************************************************************************************************************

let house2 = {
    roof : {frame : 'wooden' , roofing : 'slate'},
    window : ['wooden', 'plastic'],
    numOfFloor : 2,
    door : 1
};

let driver = {
    category : ['A', 'A1', 'B', 'B1', 'C1'],
    ownCar : {sedan : 'Ford Mondeo', crossover : 'Kia Sportage'},
    experience : 5,
    isValidLicense : true,
    hasCarCrash : false
}

let computer = {
    colour : 'grey',
    systemUnit : {processor : 'core i5', ram : 8, hdd : null, ssd: 500},
    keyboard : ['esc', 'ctrl', 'alt', '1', 'a', 'fn'],
};

let table = {
    material : ['wooden', 'glass'],
    stokke : {hasAdditionSection : true, colour : 'dark'},
    length : 2,
    width : 1

}

let bag = {
        fabric : ['skin', 'cloth'],
        zipper : {material : 'metal', colour : 'grey'},
        hasHandle : true,
        numSection : 3
}

//task 3 
//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
//***********************************************************************************************************************

for (let dogKey in dog) {
    console.log(dogKey);
}

for (let humanKey in human) {
    console.log(humanKey);
}

for (let carKey in car) {
    console.log(carKey);
}

for (let  laptopKey in laptop) {
    console.log(laptopKey);
}

for (let houseKey in house) {
    console.log(houseKey);
}

for (let house2Key in house2) {
    console.log(house2Key);
}

for (let driverKey in driver) {
    console.log(driverKey);
}

for (let computerKey in computer) {
    console.log(computerKey);
}

for (let tableKey in table) {
    console.log(tableKey);
}

for (let bagKey in bag) {
    console.log(bagKey);
}

//task 4
//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//***********************************************************************************************************************

console.log(Object.keys(house))
console.log(Object.keys(house2))
console.log(Object.keys(human))
console.log(Object.keys(car))
console.log(Object.keys(laptop))
console.log(Object.keys(dog))
console.log(Object.keys(computer))
console.log(Object.keys(table))
console.log(Object.keys(bag))
console.log(Object.keys(driver))

//task 5
//- При - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
//***********************************************************************************************************************

let cars1 = [{model : 'Lada',      yearOfIssue : 2010,  powerful : 98,  colour : 'green'},
        {model : 'Toyota',     yearOfIssue : 2009,  powerful : 112, colour : 'yellow'},
        {model : 'Volvo',      yearOfIssue : 2008,  powerful : 134, colour : 'red'},
        {model : 'Volkswagen', yearOfIssue : 2007,  powerful : 167, colour : 'blue'},
        {model : 'BMW',        yearOfIssue : 2006,  powerful : 176, colour : 'grey'},
        {model : 'Ford',       yearOfIssue : 2005,  powerful : 134, colour : 'pink'},
        {model : 'Mazda',      yearOfIssue : 2004,  powerful : 167, colour : 'black'},
        {model : 'KIA',        yearOfIssue : 2003,  powerful : 174, colour : 'white'},
        {model : 'Renault',    yearOfIssue : 2002,  powerful : 131, colour : 'brown'},
        {model : 'Audi',       yearOfIssue : 2001,  powerful : 145, colour : 'black'}]

//task 6
//- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
//***********************************************************************************************************************

let cities = [{name : 'Tokio',    population : 10000000, country : 'Japan',    region : 'Asia'},
              {name : 'New York', population : 5000000,  country : 'USA',      region : 'America'},
              {name : 'Berlin',   population : 3000000,  country : 'Germany',  region : 'Europe'},
              {name : 'Harare',   population : 1600000,  country : 'Zimbabwe', region : 'Afric'},
              {name : 'Kiev',     population : 3000000,  country : 'Ukraine',  region : 'Europe'}]

//task 7
//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//***********************************************************************************************************************

let cars2 = [{model : 'Ford',    yearOfIssue : 2005,  powerful : 134, colour : 'pink',  driverC : {name : 'Viktor', age : 45, sex : 'Male',   experience : 25}},
             {model : 'Mazda',   yearOfIssue : 2004,  powerful : 167, colour : 'black', driverC : {name : 'Vasya',  age : 26, sex : 'Male',   experience : 5}},
             {model : 'KIA',     yearOfIssue : 2003,  powerful : 174, colour : 'white', driverC : {name : 'Andrew', age : 35, sex : 'Male',   experience : 10}},
             {model : 'Renault', yearOfIssue : 2002,  powerful : 131, colour : 'brown', driverC : {name : 'Sofia',  age : 30, sex : 'Female', experience : 12}},
             {model : 'Audi',    yearOfIssue : 2001,  powerful : 145, colour : 'black', driverC : {name : 'Kate',   age : 21, sex : 'Female', experience : 1}}]

//task 8,9,10
//- проитерировать каждый массив из задания 5,6,7 при помощи while.
//- проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//***********************************************************************************************************************

let i = 0
while (i < cars1.length){
    console.log(cars1[i]);
    i++
}

i = 0
while (i < cars2.length){
    console.log(cars2[i]);
    i++
}

i = 0
while (i < cities.length){
    console.log(cars2[i]);
    i++
}

for (let j = 0; j < cars1.length; j++) {
    console.log(cars1[j]);
}

for (let j = 0; j < cars2.length; j++) {
    console.log(cars2[j]);
}

for (let j = 0; j < cities.length; j++) {
    console.log(cities[j]);
}

for (let cars1Element of cars1) {
    console.log(cars1Element);
}

for (let cars2Element of cars2) {
    console.log(cars2Element);
}

for (let citiesElement of cities) {
    console.log(citiesElement);
}

//task 11
// - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
//***********************************************************************************************************************

let dog11 = JSON.stringify(dog)
let human11 = JSON.stringify(human)
let car11 = JSON.stringify(car)
let laptop11= JSON.stringify(laptop)
let house11 = JSON.stringify(house)

let dog12 = JSON.parse(dog11)
let human12 = JSON.parse(human11)
let car12 = JSON.parse(car11)
let laptop12 = JSON.parse(laptop11)
let house12 = JSON.parse(house11)

//task 12
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//***********************************************************************************************************************

for (let cars1Element of cars1) {
    cars1Element = JSON.stringify(cars1Element)
}

for (let citiesElement of cities) {
    citiesElement = JSON.stringify(citiesElement)
}

//task 13
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//***********************************************************************************************************************


let cloneCars2 = []
for (let cars2Element of cars2) {
    let s = JSON.stringify(cars2Element)
    cloneCars2.push(JSON.parse(s))
}
console.log(cloneCars2);

//task 14, 15
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//***********************************************************************************************************************

let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
             {name: 'petya', age: 30, status: true,  skills: ['java', 'js', 'html']},
             {name: 'kolya', age: 29, status: true,  skills: ['mysql', ',mongo']},
             {name: 'olya',  age: 28, status: false, skills: ['java', 'js']},
             {name: 'max',   age: 30, status: true,  skills: ['mysql', ',mongo']}];

arrOfSkills = []

for (let user of users) {
    console.log(user);
    for (let skill of user.skills) {
        arrOfSkills.push(skill)
    }

}
console.log(arrOfSkills);

for (let user of users) {
    for (let userKey in user) {
        console.log(userKey);
    }
}

//task 16
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//***********************************************************************************************************************

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let arrOfAdress = []

for (let user of users) {
    arrOfAdress.push(user.address)
    let result = ''
    for (let addressKey in user.address) {
        result += user.address[addressKey]
        result += ' '
    }
    childBlock = document.createElement('div')
    childBlock.innerText = childBlock.innerText = `${user.name} ${user.status} ${user.age} ${result}`
    document.body.appendChild(childBlock)

}

for (let user of users) {
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const h3 = document.createElement('h3')
    let result = ''
    for (let addressKey in user.address) {
        result += user.address[addressKey]
        result += ' '
    }
    h3.innerText = user.name
    p1.innerText = user.age
    p2.innerText = result
    p3.innerText = user.status

    div.appendChild(h3);
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    document.body.appendChild(div)

}
for (let user of users) {
    const div = document.createElement('div')
    const age = document.createElement('p')
    const status = document.createElement('p')
    const name = document.createElement('h3')
    const addrssBlock = document.createElement('div')

    for (let addressKey in user.address) {
        const temp  = document.createElement('div')
        temp.innerHTML = user.address[addressKey]
        addrssBlock.appendChild(temp)
    }
    name.innerText = user.name
    age.innerText = user.age
    status.innerText = user.status


    div.appendChild(name)
    div.appendChild(age)
    div.appendChild(status)
    div.appendChild(addrssBlock)
    document.body.appendChild(div)
}

//task 17
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//***********************************************************************************************************************

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
                   {id: 2, name: 'petya', age: 30, status: true},
                   {id: 3, name: 'kolya', age: 29, status: true},
                   {id: 4, name: 'olya', age: 28, status: false},];

let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
                    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
                    {user_id: 2, country: 'Poland', city: 'Krakow'},
                    {user_id: 4, country: 'USA', city: 'Miami'},];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if(user.id === city.user_id){
            user.address = city;
        }
    }
}

//task 18
// - створити в розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//***********************************************************************************************************************

let elemById = document.getElementById('content')
let textOfElem = elemById.innerText
elemById.innerText = '****************************'
elemById.style.width = '200px'
elemById.style.height = '20px'
console.log(textOfElem);

let elemByClass = document.getElementsByClassName('rules')
for (let elem of elemByClass) {
    elem.innerText = '###################'
    elem.style.width = '200px'
    elem.style.height = '20px'

}
let arrr = document.getElementsByTagName('h1')
console.log(arrr);
for (let elem of arrr) {
    elem.innerText = '~~~~~~~~~~~~~~~~~~~~~~~'
    elem.style.width = '200px'
    elem.style.height = '20px'

}

// task 19
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

let table1 = document.createElement('table')
let tr1 = document.createElement('tr')
let td11 = document.createElement('td')
let td21 = document.createElement('td')
let td31 = document.createElement('td')

tr1.appendChild(td11)
tr1.appendChild(td21)
tr1.appendChild(td31)
table1.appendChild(tr1)

document.body.appendChild((table1))
//***************************************

let table2 = document.createElement('table')
for (let i = 0; i < 10; i++) {
    let td12 = document.createElement('td')
    let td22 = document.createElement('td')
    let td32 = document.createElement('td')
    let tr2 = document.createElement('tr')
    tr2.appendChild(td12)
    tr2.appendChild(td22)
    tr2.appendChild(td32)
    table2.appendChild(tr2)
}
document.body.appendChild((table2))
//***************************************

let table3 = document.createElement('table')
for (let i = 0; i < 10; i++) {
    let tr3 = document.createElement('tr')
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td')
        tr3.appendChild(td)
    }
    table3.appendChild(tr3)
}
document.body.appendChild((table3))

let m = parseInt(prompt('Enter num of rows'))
let n = parseInt(prompt('Enter num of column'))
let table = document.createElement('table')
for (let i = 0; i < m; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < n; j++) {
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
document.body.appendChild((table))

//task 20
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний
//***********************************************************************************************************************

let allTags = document.getElementsByTagName('*')
for (const tag of allTags) {
    if(tag.getAttribute('class'))
        console.log(tag);
}

let elementByTag1 = document.getElementsByTagName('p')
for (let tag of elementByTag1) {
    tag.innerText = 'hello oktenweb'
}
let elementByTag2 = document.getElementsByTagName('div')
for (let tag of elementByTag2) {
    tag.style.backgroundColor = 'red'
}
