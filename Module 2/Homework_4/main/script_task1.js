// //task1
// // - створити функцію яка виводить масив
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// function printArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
//
//
// function fillArrayWithRandomNumbers(array, lengthOfArray) {
//     for (let i = 0; i < lengthOfArray; i++) {
//         array[i] = (Math.round(Math.random()*100));
//     }
//     printArray(array)
// }
// arr = []
// lenOfArray = 10
//
// fillArrayWithRandomNumbers(arr, lenOfArray)
//
//
// //task 2
// // - створити функцію яка приймає три числа та виводить і повертає найменьше.
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function findMaxValue(a, b, c) {
//     if (a > b && a >c){
//         return a;
//     }else if (b > a && b > c){
//         return b;
//     }else {
//         return c;
//     }
//     return 0;
// }
//
// console.log(findMaxValue(1, 4, 3));
//
// function findMinValue(a, b, c) {
//     if (a < b && a < c){
//         return a;
//     }else if (b < a && b < c){
//         return b;
//     }else {
//         return c;
//     }
//     return 0;
// }
//
// console.log(findMinValue(1, 4, 3));
//
// // task 3
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function findMinMaxValue() {
//     let maxValue = arguments[0]
//     let minValue = arguments[0]
//     for (const elem of arguments) {
//         if (elem >=maxValue){
//             maxValue = elem
//         }
//         if (elem <= minValue){
//             minValue = elem
//         }
//     }
//     console.log(maxValue);
//     return minValue
// }
// findMinMaxValue(1, 2, 88, 4, 5, 6)
// console.log(findMinMaxValue(1, 2, 88, 4, 5, 6));

//task 4
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву

// function findMinMaxValue(array) {
//     let maxValue = array[0]
//     let minValue = array[0]
//     for (const elem of array) {
//         if (elem >=maxValue){
//             maxValue = elem
//         }
//         if (elem <= minValue){
//             minValue = elem
//         }
//     }
//     console.log(maxValue);
//     return minValue
// }
// let arrOfNum = [1, 2, 88, 4, 5, 6]
// findMinMaxValue(arrOfNum)
// console.log(findMinMaxValue(arrOfNum));

// //task 5
// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function summarizeArrayElem(array) {
//     let sum = 0
//     for (const arrayElem of array) {
//         sum += arrayElem
//     }
//     return sum
// }
//
// function getAverageOfArrayElem(array) {
//     let sum = summarizeArrayElem(array)
//     average = sum / array.length
//     return average
// }
// let arrOfNum = [1, 2, 3, 4, 5]
// console.log(summarizeArrayElem(arrOfNum));
// console.log(getAverageOfArrayElem(arrOfNum));
//
// //task 6
// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальну кількість полів в них
//
// function getNumOfObjInArray(arrayWithObj){
//     let numOfObj = 0
//     for (const Obj of arrayWithObj) {
//         numOfObj +=1
//     }
//     return numOfObj
// }
//
// function getNumOfFieldOfObjInArray(arrayWithObj){
//     let numOfField = 0
//     for (const Obj of arrayWithObj) {
//         for (const ObjKey in Obj) {
//             numOfField +=1
//         }
//     }
//     return numOfField
// }
//
// let cars = [{model : 'Lada',      yearOfIssue : 2010,  powerful : 98,  colour : 'green'},
//         {model : 'Toyota',     yearOfIssue : 2009,  powerful : 112, colour : 'yellow'},
//         {model : 'Volvo',      yearOfIssue : 2008,  powerful : 134, colour : 'red'},
//         {model : 'Volkswagen', yearOfIssue : 2007,  powerful : 167, colour : 'blue'},
//         {model : 'BMW',        yearOfIssue : 2006,  powerful : 176, colour : 'grey'},
//         {model : 'Ford',       yearOfIssue : 2005,  powerful : 134, colour : 'pink'},
//         {model : 'Mazda',      yearOfIssue : 2004,  powerful : 167, colour : 'black'},
//         {model : 'KIA',        yearOfIssue : 2003,  powerful : 174, colour : 'white'},
//         {model : 'Renault',    yearOfIssue : 2002,  powerful : 131, colour : 'brown'},
//         {model : 'Audi',       yearOfIssue : 2001,  powerful : 145, colour : 'black'}]
//
// console.log(getNumOfObjInArray(cars));
// console.log(getNumOfFieldOfObjInArray(cars));

// //task 7
// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     Приклад
// let arrayA = [1,2,3,4]
// let arrayB = [2,3,4,5]
// // результат
// //     [3,5,7,9]
//
// function summaraizeElemWithSameIndex(firstArray, secondArray) {
//     let resultArray = []
//     for (let i = 0; i < firstArray.length; i++) {
//         resultArray.push(firstArray[i] + secondArray[i])
//     }
//     return resultArray
// }
// console.log(summaraizeElemWithSameIndex(arrayA, arrayB))
//
// //task 8
// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function replaceObjByIndex(array, i) {
//     if (i+1 < array.length){
//         let tempObj = array[i]
//         array[i] = array[i+1]
//         array[i+1] = tempObj
//     }
//     return array
// }
// let arr = [1,2,3,4]
// console.log(replaceObjByIndex(arr, 2));

// //task 9
// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
//
// function moveElemToEndOfArray(array, elem = 0) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == elem) {
//             array.push(array[i])
//             array.splice(i, 1)
//         }
//     }
//     return array
// }
// let arr = [0, 1, 0, 2, 3, 4, 0]
// console.log(moveElemToEndOfArray(arr));
//
// //task 10
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function createElem(text = "Hello owu", typeOfBlock = 'div') {
//     let element = document.createElement(typeOfBlock)
//     element.innerText = text
//     document.body.appendChild(element)
// }
// createElem()
//
// //task 11
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// // Для кожної властивості створити всередені блока автомоблія свій блок
//
// let cars = [{model : 'Lada',      yearOfIssue : 2010,  powerful : 98,  colour : 'green'},
//     {model : 'Toyota',     yearOfIssue : 2009,  powerful : 112, colour : 'yellow'},
//     {model : 'Volvo',      yearOfIssue : 2008,  powerful : 134, colour : 'red'},
//     {model : 'Volkswagen', yearOfIssue : 2007,  powerful : 167, colour : 'blue'},
//     {model : 'BMW',        yearOfIssue : 2006,  powerful : 176, colour : 'grey'},
//     {model : 'Ford',       yearOfIssue : 2005,  powerful : 134, colour : 'pink'},
//     {model : 'Mazda',      yearOfIssue : 2004,  powerful : 167, colour : 'black'},
//     {model : 'KIA',        yearOfIssue : 2003,  powerful : 174, colour : 'white'},
//     {model : 'Renault',    yearOfIssue : 2002,  powerful : 131, colour : 'brown'},
//     {model : 'Audi',       yearOfIssue : 2001,  powerful : 145, colour : 'black'}]
//
// function showObjOnPageInOneBlock(array, ID) {
//     elemById = document.getElementById(ID)
//
//     for (let object of array) {
//         const objectBlock = document.createElement('div')
//         for (const objectKey in object) {
//             const temp  = document.createElement('p')
//             temp.innerText = object[objectKey]
//             objectBlock.appendChild(temp)
//         }
//         document.write('<br>')
//         document.body.appendChild(objectBlock)
//
//     }
// }
//
// function showObjOnPageInDifferentBlock(array, ID) {
//     elemById = document.getElementById(ID)
//
//     for (let object of array) {
//         const objectBlock = document.createElement('div')
//         for (const objectKey in object) {
//             const temp  = document.createElement('div')
//             temp.innerText = object[objectKey]
//             objectBlock.appendChild(temp)
//         }
//         document.write('<br>')
//         elemById.appendChild(objectBlock)
//
//     }
// }
// showObjOnPageInOneBlock(cars, 'cars')
// showObjOnPageInDifferentBlock(cars, 'cars')
//
// //task 12
// // (на основі минулого ДЗ)
// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// // та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
// //             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// //             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату:
//
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
//
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function joinArrObjIntoAnotherArrObj(mainArray, additionArray) {
//     for (const obj of mainArray) {
//         for (const additionObj of additionArray) {
//             if(obj.id === additionObj.user_id){
//                 obj.address = additionObj;
//             }
//         }
//     }
//     return mainArray
// }
// console.log(joinArrObjIntoAnotherArrObj(usersWithId, citiesWithId))
//
// //task 13
// // ***- беремо завдання з правилами з укроку №3 :
// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
// 	{
// 		title: 'Первое правило Бойцовского клуба.',
// 		body: 'Никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Второе правило Бойцовского клуба.',
// 		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Третье правило Бойцовского клуба.',
// 		body: 'В схватке участвуют только двое.'
// 	},
// 	{
// 		title: 'Четвертое правило Бойцовского клуба.',
// 		body: 'Не более одного поединка за один раз.'
// 	},
// 	{
// 		title: 'Пятое правило Бойцовского клуба.',
// 		body: 'Бойцы сражаются без обуви и голые по пояс.'
// 	},
// 	{
// 		title: 'Шестое правило Бойцовского клуба.',
// 		body: 'Поединок продолжается столько, сколько потребуется.'
// 	},
// 	{
// 		title: 'Седьмое правило Бойцовского клуба.',
// 		body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 	},
// 	{
// 		title: 'Восьмое и последнее правило Бойцовского клуба.',
// 		body: 'Новичок обязан принять бой.'
// 	},
// ];
//
// function showObjOnPage(array, ID) {
//     elemById = document.getElementById(ID)
//
//     for (let object of array) {
//         const objectBlock = document.createElement('div')
//         let flag = true
//         for (const objectKey in object) {
//             if (flag){
//                 const tempTitle  = document.createElement('h2')
//                 tempTitle.innerText = object[objectKey]
//                 objectBlock.appendChild(tempTitle)
//             }else {
//                 const tempBody  = document.createElement('p')
//                 tempBody.innerText = object[objectKey]
//                 objectBlock.appendChild(tempBody)
//             }
//             flag = !flag
//
//         }
//         document.write('<br>')
//         elemById.appendChild(objectBlock)
//     }
// }
// showObjOnPage(rules, 'wrap')
