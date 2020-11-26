//task 1
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
//
// function generateRandomInterval() {
//     return Math.random() * 1000
// }
//
// function typeByLetter(text, id) {
//     let arrOfLetters = text.split('')
//     const content = document.getElementById(id)
//     let i = 0
//     let interval = setInterval(() =>{
//             content.textContent += arrOfLetters[i]
//             if (i === arrOfLetters.length - 1){
//                 clearInterval(interval)
//             }
//             i++
//         }, generateRandomInterval())
// }


//task 2
// отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов

// arr = [4, 1, 3, 2, 5]
// sortedArr = []
// arr.forEach((i) => {
//     setTimeout(() => {
//         sortedArr.push(i)
//     }, i * 100)
// })
// setTimeout(() => {
//     console.log(sortedArr)
// }, 500)
