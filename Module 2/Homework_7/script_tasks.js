// task 1
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let newDiv = document.createElement('div')
// newDiv.id ='text'
// newDiv.innerText = 'text'
// newDiv.style.backgroundColor = 'red'
//
// let btnRemove = document.createElement('button')
// btnRemove.innerText = 'remove'
//
// newDiv.appendChild(btnRemove)
// document.body.appendChild(newDiv)
//
// btnRemove.onclick = () => {
//     newDiv.style.display = 'none'
// }
//
// task 2
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btnSelfRemove = document.createElement('button')
// btnSelfRemove.innerText = 'self remove'
// document.body.appendChild(btnSelfRemove)
//
// btnSelfRemove.onclick = () => {
//     btnSelfRemove.style.display = 'none'
// }
//
// task 3
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let labelAge = document.createElement('label')
// let inputAge = document.createElement('input')
// let btnReadAge = document.createElement('button')
//
// labelAge.innerText = 'enter your age:'
// inputAge.style.margin = '20px'
// btnReadAge.innerText = 'ok'
//
// document.body.appendChild(labelAge)
// document.body.appendChild(inputAge)
// document.body.appendChild(btnReadAge)
//
// btnReadAge.onclick = () => {
//     const age = inputAge.value
//     if (age < 18){
//         alert('you are under 18')
//     }
// }
//
// task 4
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let divMenu = document.createElement('div')
// let spanNavicon = document.createElement('span')
// let spanMenu = document.createElement('span')
// divMenu.style.backgroundColor = 'green'
// divMenu.style.width = '100px'
// spanNavicon.innerHTML = '&#9776'
// spanMenu.innerText = 'menu'
//
// divMenu.appendChild(spanNavicon)
// divMenu.appendChild(spanMenu)
// document.body.appendChild(divMenu)
//
// function createMenuItems(numOfItems) {
//     for (let i = 0; i < numOfItems; i++) {
//         let divMenuItem = document.createElement('div')
//         divMenuItem.style.paddingLeft = '20px'
//         divMenuItem.className = 'menu-item'
//         divMenuItem.innerText = `item №${i+1}`
//         divMenuItem.style.display = 'none'
//         divMenu.appendChild(divMenuItem)
//     }
// }
//
// createMenuItems(10)
//
// divMenu.onclick = () => {
//     let menuItems = document.getElementsByClassName('menu-item')
//     for (let i = 0; i < menuItems.length; i++) {
//         if (menuItems[i].style.display === 'none') {
//             menuItems[i].style.display = 'block'
//         } else {
//             menuItems[i].style.display = 'none'
//         }
//     }
// }
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let arrOfComments = [{title : 'Comment №1', body: 'hi'},
//                      {title : 'Comment №2', body: 'hello'},
//                      {title : 'Comment №3', body: 'good morning'},
//                      {title : 'Comment №4', body: 'good afternoon'},
//                      {title : 'Comment №5', body: 'good evening'}]
//
// let blockOfComments = document.createElement('div')
// let numberOfComment = 1
// for (const comment of arrOfComments) {
//     let divComment = document.createElement('div')
//     let divCommentTitle = document.createElement('div')
//     let divCommentBody = document.createElement('div')
//     let btnDisplayCommentBody = document.createElement('button')
//
//     btnDisplayCommentBody.innerText = 'hide'
//     btnDisplayCommentBody.style.marginLeft = '20px'
//
//     divCommentBody.className = `comment-body${numberOfComment}`
//     divCommentBody.innerText = comment.body
//     divCommentBody.style.paddingLeft = '20px'
//     divCommentBody.style.margin = '5px'
//
//     divCommentTitle.innerText = comment.title
//
//     divComment.appendChild(divCommentTitle)
//     divComment.appendChild(divCommentBody)
//     divComment.appendChild(btnDisplayCommentBody)
//     blockOfComments.appendChild(divComment)
//
//     btnDisplayCommentBody.onclick = () => {
//         if (divCommentBody.style.display === 'none') {
//             divCommentBody.style.display = 'block'
//             btnDisplayCommentBody.innerText = 'hide'
//         } else {
//             divCommentBody.style.display = 'none'
//             btnDisplayCommentBody.innerText = 'show'
//         }
//     }
//     numberOfComment++
// }
// document.body.appendChild(blockOfComments)
//
// task 6
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const numOfForm = 2
// const numOfInput = 2
// for (let i = 0; i < numOfForm; i++) {
//     let divWithFormsAndBtns = document.createElement('div')
//     let newForm = document.createElement('form')
//     let btnSubmit = document.createElement('button')
//     newForm.name = `myForm${i+1}`
//     newForm.id = 'form'
//     btnSubmit.name = `btnSubmit`
//     btnSubmit.innerText = 'submit'
//
//     for (let j = 0; j < numOfInput; j++) {
//         let newInput = document.createElement('input')
//         newInput.name = `input${j+1}`
//         newForm.appendChild(newInput)
//     }
//     divWithFormsAndBtns.appendChild(newForm)
//     divWithFormsAndBtns.appendChild(btnSubmit)
//     document.body.appendChild(divWithFormsAndBtns)
// }
//
// let [btnSubmit1, btnSubmit2] = document.getElementsByName('btnSubmit')
//
// btnSubmit1.onclick = () => {
//     let myForm = document.forms.myForm1
//     console.log(myForm.input1.value);
//     console.log(myForm.input2.value);
// }
//
// btnSubmit2.onclick = () => {
//     let myForm = document.forms.myForm2
//     console.log(myForm.input1.value);
//     console.log(myForm.input2.value);
// }
//
// task 7
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// task 8
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// function generateTable(rows, columns, id, content) {
//     let elemForInsertion = document.getElementById(id)
//     let table = document.createElement('table')
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement('td')
//             td.innerText = content
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     elemForInsertion.appendChild(table)
// }
//
// let rows
// let columns
// let content
//
// for (let i = 0; i < 3; i++) {
//     let input = document.createElement('input');
//     input.name = 'input'
//     input.style.display = 'block'
//     document.body.appendChild(input)
// }
// let btnReadInfoForTable = document.createElement('button')
// btnReadInfoForTable.innerText = 'generate table'
//
// document.body.appendChild(btnReadInfoForTable)
//
//
//
// btnReadInfoForTable.onclick = () => {
//     let input = document.getElementsByName('input')
//     rows = input[0].value
//     columns = input[1].value
//     content = input[2].value
//     generateTable(rows, columns, 'insert-here', content)
// }
//
// task 9
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let arrOfimg = [{img_src: "Legend.jpg"},
//                 {img_src: "Maks_Fury_Road.jpg"},
//                 {img_src: "Venom.jpg"},
//                 {img_src: "Vychyvshiy.jpg"}]
//
// let divForCarousel= document.createElement('div')
// let img = document.createElement('img')
// let btnLeft = document.createElement('button')
// btnLeft.innerText = 'left'
// let btnRight = document.createElement('button')
// btnRight.innerText = 'right'
//
// let num = 0
// img.src = arrOfimg[num].img_src
// divForCarousel.appendChild(img)
// divForCarousel.appendChild(btnLeft)
// divForCarousel.appendChild(btnRight)
// document.body.appendChild(divForCarousel)
//
// btnLeft.onclick = () => {
//     num - 1 < 0 ? num = arrOfimg.length - 1 : num= num-1
//     img.src = arrOfimg[num].img_src
// }
// btnRight.onclick = () => {
//     num + 1 > arrOfimg.length - 1 ? num = 0 : num++
//     img.src = arrOfimg[num].img_src
//
// }
//
// task 10
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// arrOfSwearWords = ['fuck', 'shit', 'bastard', 'crap']
//
// let input = document.createElement('input')
// input.type = 'text'
// let btnCheck = document.createElement('button')
// btnCheck.innerText = 'check'
// document.body.appendChild(input)
// document.body.appendChild(btnCheck)
// btnCheck.onclick = () => {
//     for (const word of arrOfSwearWords) {
//         if (input.value === word){
//             alert('I will ban you right now')
//        }
//
//     }
// }
//
// task 11
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
// arrOfSwearWords = ['fuck', 'shit', 'bastard', 'crap']
// let input = document.createElement('input')
// input.type = 'text'
// let btnCheck = document.createElement('button')
// btnCheck.innerText = 'check'
// document.body.appendChild(input)
// document.body.appendChild(btnCheck)
//
// btnCheck.onclick = () => {
//     let sentence = input.value
//     for (const swearWord of arrOfSwearWords) {
//         if (sentence.includes(swearWord)){
//             alert(`I will ban you right now for such a word`)
//         }
//     }
// }
//
// task 12
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// const arrOfHeaders = document.getElementsByTagName('h2')
// const content = document.getElementById('content')
// const menu = document.getElementById('insert-here')
// const wrap = document.getElementById('wrap')
// const ulMenu = document.createElement('ul')
// for (let i = 0; i < arrOfHeaders.length; i++) {
//     const itemMenu = document.createElement('li')
//     const a = document.createElement('a')
//     let link = 'link'+i
//     a.href = '#' + link
//     arrOfHeaders[i].setAttribute('id', link)
//     a.innerHTML = arrOfHeaders[i].innerText
//     itemMenu.appendChild(a)
//     ulMenu.appendChild(itemMenu)
// }
// menu.appendChild(ulMenu)
//
// content.style.display = 'flex'
// content.style.flexDirection = 'row'
// menu.style.width = '200px'
//
//

// task 13
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
// let chBoxFilterByStatus = document.createElement('input')
// let chBoxFilterByAge = document.createElement('input')
// let chBoxFilterByCity = document.createElement('input')
// chBoxFilterByStatus.type = 'checkbox'
// chBoxFilterByAge.type = 'checkbox'
// chBoxFilterByCity.type = 'checkbox'
//
// let labelStatus =document.createElement('label')
// let labelAge =document.createElement('label')
// let labelCity =document.createElement('label')
//
// labelStatus.innerText = 'true status'
// labelAge.innerText = '> 29 years'
// labelCity.innerText = 'from Kiev '
//
// let btnOK = document.createElement('button')
// btnOK.innerText = 'Ok'
//
// let div = document.createElement('div')
//
//
// document.body.appendChild(chBoxFilterByStatus)
// document.body.appendChild(labelStatus)
// document.body.appendChild(chBoxFilterByAge)
// document.body.appendChild(labelAge)
// document.body.appendChild(chBoxFilterByCity)
// document.body.appendChild(labelCity)
// document.body.appendChild(btnOK)
//
//
// btnOK.onclick = () => {
//     div.innerText = JSON.stringify(users)
//     if (chBoxFilterByStatus.checked){
//         users = users.filter(value => !value.status)
//     }
//     if (chBoxFilterByAge.checked) {
//         users = users.filter(value => value.age >= 29)
//     }
//     if (chBoxFilterByCity.checked){
//         users = users.filter(value => value.address.city === 'Kyiv')
//     }
//     console.log(users);
//     div.innerText = JSON.stringify(users)
//     document.body.appendChild(div)
// }
//
// task 15
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let buttonNext = document.createElement('button')
buttonNext.innerText = 'next'
let buttonPrev = document.createElement('button')
buttonPrev.innerText = 'prev';
document.body.append(buttonNext, buttonPrev)
let move = (element) => {
    let parent = null;
    let current = element;
    if (current === document.body) {
        alert("End of the document")
    }
    buttonNext.onclick = () => {
        if (current.nextElementSibling == null) {
            if (current.parentElement.style.backgroundColor === 'red') {
                current.parentElement.style.backgroundColor = '#fff'
            }
            parent = current.parentElement.nextElementSibling
            if (parent == null) {
                move(current.parentElement)
            }
            current = parent != null ? parent : current
        } else if (current.children[0] !== undefined) {
            parent = current
            current = current.children[0];
            if (current.parentElement.children.length === 2) {
                current.parentElement.style.backgroundColor = 'red'
            }
        } else {
            current = current.nextElementSibling
        }
        console.log(current)
    }
    buttonPrev.onclick = () => {
        if (current === document.head) {
            alert("It is the beginning of the document")
        }
        if (current.previousElementSibling === null) {
            parent = current.parentElement.previousElementSibling
            if (parent == null) {
                move(current.parentElement)
            }
            current = parent != null ? parent : current
        } else {
            current = current.previousElementSibling
        }
        console.log(current)
    }
}
move(document.getElementsByClassName('rule1')[0])
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let string = 'kfjdaslfjsa'
// string = string.slice(0, 4) + string.slice(4);
// console.log(string)
// document.body.onclick = () => {
//     let selected = window.getSelection().focusNode.parentElement;
//     let startPosition = window.getSelection().anchorOffset;
//     let endPosition = window.getSelection().focusOffset;
//     selected.innerHTML = selected.innerHTML.slice(0, startPosition) + `<span class="highlighted_text">${selected.innerHTML.slice(startPosition, endPosition)}</span>` + selected.innerHTML.slice(endPosition)
//     console.log(selected.innerHTML)
// }

