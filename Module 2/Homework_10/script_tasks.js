//task 1
// отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов

// Реалізувати друкарську машинку.
//     У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

//first solution
// let sentence = 'Lorem ipsum dolor sit amet, consectetur'
//
// typeByLetter(sentence, 'content')

// function generateRandomTimeout() {
//     return Math.random() * 1000
// }

// async function typeByLetter(text, id) {
//     let arrOfLetters = text.split('')
//     const content = document.getElementById(id)
//     console.log(arrOfLetters);
//     for (const letter of arrOfLetters) {
//         await setTimeoutToTypeLetter(letter, content)
//             .then(value => {console.log(value);})
//
//     }
// }
//
// function setTimeoutToTypeLetter(letter, elementById) {
//     return new Promise((resolve, reject) => {
//         const randTimeout = generateRandomTimeout()
//         setTimeout(() =>{
//             elementById.textContent += letter
//             resolve(`${letter} - затримка ${randTimeout}`)
//         }, randTimeout)
//     })
// }



//second solution

// let sentence = 'Lorem ipsum dolor sit amet, consectetur'
// typeByLetter(sentence, 'content')

// function generateRandomTimeout() {
//     return Math.random() * 10000
// }

// function typeByLetter(text, id) {
//     let arrOfLetters = text.split('')
//     const content = document.getElementById(id)
//     for (const letter of arrOfLetters) {
//         setInterval(() =>{
//             content.textContent += letter
//         }, generateRandomTimeout())
//     }
//     console.log(arrOfLetters);
//     for (const letter of arrOfLetters) {
//         await setTimeoutToTypeLetter(letter, content)
//             .then(value => {console.log(value);})
// }


// отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов
// array = [4, 1, 3, 2, 5]
// sorted_array = []
// array.forEach((i) => {
//     setTimeout(() => {
//         sorted_array.push(i)
//     }, i * 1000)
// })
// setTimeout(() => {
//     console.log(sorted_array)
// }, 7000)

// Timer for page
// let span = document.getElementById("number")
// let interval = setInterval(() => {
//     if (Number(span.innerText) > 0) {
//         span.innerText = String(Number(span.innerText) - 1)
//     } else {
//         clearInterval(interval)
//     }
// }, 10000)