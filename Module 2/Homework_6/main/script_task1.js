//task 1
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let arrOfNum = [0, 1, 4, 4, 5423.334, 2.323, 234, 42, 4340, 6.42, 3.3, 23, 5, 23.44, 23, 4.23, 34, 32231, 52352, 22, 23]

// arrOfNum.sort((a, b) => { return a - b })

// arrOfNum.sort((a, b) => { return b - a })

// console.log(arrOfNum.filter(value => {
//     if (!(value % 3)){
//         return true
//     }
// }));

// arrOfNum.filter(value => {
//     if (!(value % 10)){
//         return value
//     }
// });

// arrOfNum.forEach(value => {
//     console.log(value);
// } )

// let mapArr = arrOfNum.map(value => {return value * 3})


//task 2
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let arrOfWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'A', 'ad', 'commodi', 'consequatur', 'consequuntur', 'corporis', 'conseqr', 'cons', 'consequa', 'conuatur', 'cose', 'coquatur']

// arrOfWords.sort()
// arrOfWords.reverse()

// console.log(arrOfWords.filter(value => {
//     if (value.length <= 4) {
//         return value
//     }
// }));

// let mapWord = arrOfWords.map(value => {return `${value}!`})


//task 3
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let users = [ {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];

// users.sort((a, b) => {return b.age - a.age})

// users.sort((a, b) => {return a.age - b.age})

// users.sort((a, b) => {return b.name.length - a.name.length})

// users.sort((a, b) => {return a.name.length - b.name.length})

// let userCopy = JSON.parse(JSON.stringify(users))

// let userWithId = userCopy.map((value, index) =>{
//     value.id = index;
//     return value
// })

// userWithId.sort(((a, b) => {return b.id - a.id}))


//task 4
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

// let cars = [ {producer:"subaru",  model: "wrx",    year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//              {producer:"subaru",  model: "legacy", year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//              {producer:"subaru",  model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//              {producer:"subaru",  model: "leone",  year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//              {producer:"subaru",  model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//              {producer:"subaru",  model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//              {producer:"bmw",     model: "115",    year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//              {producer:"bmw",     model: "315",    year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//              {producer:"bmw",     model: "650",    year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//              {producer:"bmw",     model: "320",    year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//              {producer:"mercedes",model: "e200",   year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//              {producer:"mercedes",model: "e63",    year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//              {producer:"mercedes",model: "c250",   year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//
// cars.filter(value => {
//     if (value.volume > 3){
//         return value
//     }
// });
//
// cars.filter(value => {
//     if (value.volume === 2){
//         return value
//     }
// });
//
// cars.filter(value => {
//     if (value.producer === "mercedes" ){
//         return value
//     }
// });
//
// cars.filter(value => {
//     if (value.volume > 3 && value.producer === "mercedes") {
//         return value
//     }
// })
//
// cars.filter(value => {
//     if (value.volume > 3 && value.producer === "subaru") {
//         return value
//     }
// })
//
// cars.filter(value => {
//     if (value.power > 300 && value.producer === "subaru") {
//         return value
//     }
// })
//
// cars.filter(value => value.engine.startsWith('ej'));
//
// cars.filter(value => {
//     if (value.power > 300 && value.producer === "subaru" && value.engine.startsWith('ej')) {
//         return value
//     }
// });
//
// cars.filter(value => {
//     if (value.volume < 3 && value.producer === "mercedes") {
//         return value
//     }
// })
//
// cars.filter(value => {
//     if (value.volume > 2 && value.power > 250) {
//         return value
//     }
// })
//
// cars.filter(value => {
//     if (value.power > 250 && value.producer === "bmw") {
//         return value
//     }
// });


//task 5
// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'hevchenko', number: 16}},
//                         {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'evchenko', number: 1}},
//                         {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'vchenko', number: 121}},
//                         {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'chenko', number: 90}},
//                         {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'henko', number: 115}},
//                         {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'VCBXCenko', number: 2}},
//                         {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'BVCnko', number: 22}},
//                         {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'DFFFDko', number: 43}},
//                         {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'assao', number: 12}},
//                         {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'aShevchenko', number: 16}},
//                         {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'fShevchenko', number: 121}}];

// usersWithAddress.sort(((a, b) => {return a.id - b.id}))
// usersWithAddress.sort(((a, b) => {return b.id - a.id}))

// usersWithAddress.sort(((a, b) => {return a.age - b.age}))
// usersWithAddress.sort(((a, b) => {return b.age - a.age}))

// usersWithAddress.sort(((a, b) => {return a.name.length - b.name.length}))
// usersWithAddress.sort(((a, b) => {return b.name.length - a.name.length}))

// usersWithAddress.sort(((a, b) => {
//     const nameA = a.address.street.toLowerCase()
//     const nameB = b.address.street.toLowerCase()
//     if (nameA < nameB) //сортируем строки по возрастанию
//         return -1
//     if (nameA > nameB)
//         return 1
//     return 0
// }))


// usersWithAddress.sort((a, b) => {return a.address.number - b.address.number})

// usersWithAddress.filter(value => {
//     if (value.age < 30) {
//         return value
//     }
// });

// usersWithAddress.filter(value => {
//     if (!(value.status)) {
//         return value
//     }
// });

// usersWithAddress.filter(value => {
//     if (!(value.status) && value.age < 30) {
//         return value
//     }
// });

// usersWithAddress.filter(value => {
//     if (!(value.address.number % 2)) {
//         return value
//     }
// });