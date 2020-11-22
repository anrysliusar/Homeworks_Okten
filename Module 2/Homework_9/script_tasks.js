// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

const min = 1
const max = 10
function generateRandomTimeout(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

//task 1
//callback
// function getUp(isAlive, callback) {
//     console.log('start my day');
//     setTimeout(() => {
//         if (!isAlive){
//             callback('I`m died ((', null)
//             return
//         }
//         callback(null, 'i get up')
//
//     }, generateRandomTimeout(min, max))
// }
//
// function haveBreakfast(food, callback) {
//     console.log('I go to the fridge')
//     setTimeout(() => {
//         if (!food){
//             callback('fridge empty ((', null)
//             return
//         }
//         callback(null, food)
//     }, generateRandomTimeout(min, max))
// }
//
// function brushTeeth(toothpaste, callback) {
//     console.log("I am trying to brush my teeth")
//
//     setTimeout(() => {
//         if (!toothpaste){
//             callback('there is no my toothpaste', null)
//             return
//         }
//         callback(null, toothpaste)
//     }, generateRandomTimeout(min, max))
// }
//
// function goToClass(isLesson, callback) {
//     console.log("I'm trying to get to class")
//     setTimeout(() => {
//         if (!isLesson) {
//             callback("The lesson was canceled", null)
//             return
//         }
//         callback(null, "I'm listening to the lecturer")
//
//     }, generateRandomTimeout(min, max))
// }
//
// function haveLunch(food, callback) {
//     console.log(`I hungry`)
//
//     setTimeout(() => {
//         if (!food){
//             callback('fridge empty ((', null)
//             return
//         }
//         callback(null, food)
//     }, generateRandomTimeout(min, max))
// }
//
// function doHomework(success, callback) {
//     console.log("Start to do my Homework")
//
//     setTimeout(() => {
//         if (!success) {
//             callback("nothing to do", null)
//             return
//         }
//         callback(null, "Homework is done")
//     }, generateRandomTimeout(min, max))
// }
// function goToBed(isHomeworkDone, callback) {
//     console.log('I wanna sleep')
//
//     setTimeout(() => {
//         if (!isHomeworkDone) {
//             callback("don`t sleep, work hard", null)
//             return
//         }
//         callback(null, "finally, i go to bed")
//     }, generateRandomTimeout(min, max))
// }
//
// getUp(true, (err, success) => {
//     if (err) {
//         console.log(`Ooops ${err}`)
//         return
//     }
//     console.log(`Hoooray, ${success}`);
//     haveBreakfast("Sandwich", (nothingToEat, food) => {
//         if (nothingToEat) {
//             console.log(`There is nothing to eat: ${nothingToEat}`)
//             return ;
//         }
//         console.log(`I ate ${food}`);
//         brushTeeth('colgate', (noToothPaste, toothPaste) => {
//             if (noToothPaste) {
//                 console.log(`I didn't brush my teeth because ${noToothPaste}`)
//                 return
//             }
//             console.log(`I brushed my teeth with toothpaste ${toothPaste}`);
//             goToClass(true, (lessonCanceled, workInClass) => {
//                 if (lessonCanceled) {
//                     console.log(lessonCanceled)
//                     return
//                 }
//                 console.log(workInClass);
//                 console.log('Lessons are ended');
//
//                 haveLunch('soup', (nothingToEat, food) => {
//                     if (nothingToEat) {
//                         console.log(`There is nothing to eat: ${nothingToEat}`)
//                         return ;
//                     }
//                     console.log(`I ate ${food}`);
//                     doHomework(true, (noHomework, data) =>{
//                         if (noHomework){
//                             console.log(noHomework);
//                             return
//                         }
//                         console.log(data);
//                         goToBed(true, (hwNotSolved,fallAsleep) =>{
//                             if (hwNotSolved){
//                                 console.log(hwNotSolved);
//                                 return
//                             }
//                             console.log(fallAsleep);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//task 2
//promise

// function getUp(isAlive) {
//     return new Promise((resolve, reject) => {
//         console.log('start my day');
//         setTimeout(() => {
//             if (!isAlive){
//                 reject('I`m died :((')
//                 return
//             }
//             resolve('i get up')
//
//         }, generateRandomTimeout(min, max))
//     })
//
// }
//
// function haveBreakfast(food) {
//     return new Promise((resolve, reject) => {
//         console.log('I go to the fridge')
//         setTimeout(() => {
//             if (!food) {
//                 reject('fridge empty ((')
//                 return
//             }
//             resolve(food)
//         }, generateRandomTimeout(min, max))
//     })
// }
//
// function brushTeeth(toothpaste) {
//     return new Promise((resolve, reject) => {
//         console.log("I am trying to brush my teeth")
//
//         setTimeout(() => {
//             if (!toothpaste) {
//                 reject('there is no my toothpaste')
//                 return
//             }
//             resolve(toothpaste)
//         }, generateRandomTimeout(min, max))
//     })
// }
//
// function goToClass(isLesson) {
//     return new Promise((resolve, reject) => {
//         console.log("I'm trying to get to class")
//         setTimeout(() => {
//             if (!isLesson) {
//                 reject("The lesson was canceled")
//                 return
//             }
//             resolve("I'm listening to the lecturer")
//
//         }, generateRandomTimeout(min, max))
//     })
// }
//
// function haveLunch(food) {
//     return new Promise((resolve, reject) => {
//         console.log(`I hungry`)
//
//         setTimeout(() => {
//             if (!food) {
//                 reject('fridge empty ((')
//                 return
//             }
//             resolve(food)
//         }, generateRandomTimeout(min, max))
//     })
// }
//
// function doHomework(success) {
//     return new Promise((resolve, reject) => {
//         console.log("Start to do my Homework")
//
//         setTimeout(() => {
//             if (!success) {
//                 reject("nothing to do")
//                 return
//             }
//             resolve("Homework is done")
//         }, generateRandomTimeout(min, max))
//     })
// }
// function goToBed(isHomeworkDone) {
//     return new Promise((resolve, reject) => {
//         console.log('I wanna sleep')
//
//         setTimeout(() => {
//             if (!isHomeworkDone) {
//                 reject("don`t sleep, work hard")
//                 return
//             }
//             resolve("finally, i go to bed")
//         }, generateRandomTimeout(min, max))
//     })
// }
//
// getUp(true)
//     .then(value => {
//         if (!value) {
//             console.log(`Ooops ${value}`)
//             return
//         }
//         console.log(`Hoooray, ${value}`);
//         return haveBreakfast('Sandwich')
//     })
//     .then(food => {
//         if (!food) {
//             console.log(`There is nothing to eat: ${food}`)
//             return ;
//         }
//         console.log(`I ate ${food}`);
//         return brushTeeth('colgate')
//     })
//     .then(toothPaste => {
//         if (!toothPaste) {
//             console.log(`I didn't brush my teeth because ${toothPaste}`)
//             return
//         }
//         console.log(`I brushed my teeth with toothpaste ${toothPaste}`);
//         return goToClass(true)
//     })
//     .then(lessonProgress => {
//         if (!lessonProgress) {
//             console.log(lessonProgress)
//             return
//         }
//         console.log(lessonProgress);
//         console.log('Lessons are ended');
//         return haveLunch('soup')
//     })
//     .then(lunch => {
//         if (!lunch) {
//             console.log(`There is nothing to eat: ${lunch}`)
//             return ;
//         }
//         console.log(`I ate ${lunch}`);
//         return doHomework(true)
//     })
//     .then(homework => {
//         if (!homework){
//             console.log(homework);
//             return
//         }
//         console.log(homework);
//         return goToBed(true)
//     })
//     .then(fallAsleep => {
//         if (!fallAsleep){
//             console.log(fallAsleep);
//             return
//         }
//         console.log(fallAsleep);
//     })

//task 3
//async await

