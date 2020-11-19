// task 1
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// const textArea = document.getElementById('textArea')
// textArea.oninput = (ev) => {
//     localStorage.setItem('text', ev.target.value)
// }
// textArea.value = localStorage.getItem('text')

// task 2
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// const myForm = document.getElementById('myForm')
//
// getDataFromLocalStorage(myForm)
// function setDataInLocalStorage(form) {
//     let elementsInside = form.children
//     for (let i = 0; i < elementsInside.length; i++) {
//         if (elementsInside[i].type === 'checkbox' || elementsInside[i].type === 'radio'){
//             elementsInside[i].value = elementsInside[i].checked;
//         }
//         localStorage.setItem(elementsInside[i].id, elementsInside[i].value)
//     }
//
// }
// function getDataFromLocalStorage(form) {
//     let elementsInside = form.children
//     for (let i = 0; i < elementsInside.length; i++) {
//         elementsInside[i].value = localStorage.getItem(elementsInside[i].name)
//         if (elementsInside[i].type === 'checkbox' || elementsInside[i].type === 'radio'){
//             if(localStorage.getItem(elementsInside[i].id) === 'true') {
//                 elementsInside[i].checked = true
//             }
//         }
//     }
// }

//task 3
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const textArea = document.getElementById('textArea')
// const btnNext = document.createElement('button')
// const btnPrevious = document.createElement('button')
// const btnSave = document.createElement('button')
// const divHistoryPoint = document.createElement('div')
// divHistoryPoint.innerText = 'History'
// btnSave.style.display = 'block'
// btnSave.innerText = 'save'
// btnNext.innerText = 'next'
// btnPrevious.innerText = 'previous'
// document.body.appendChild(btnSave)
// document.body.appendChild(divHistoryPoint)
// document.body.appendChild(btnPrevious)
// document.body.appendChild(btnNext)
//
// let indexSave = 1
// let currentIndex = 1
// btnSave.onclick = () => {
//     localStorage.setItem(`historyPoint${indexSave}`, textArea.value)
//     indexSave++
//     currentIndex++
// }
// btnPrevious.onclick = () => {
//     if (currentIndex > 0){
//         currentIndex--
//         divHistoryPoint.innerText = localStorage.getItem(`historyPoint${currentIndex}`)
//     }else {
//         divHistoryPoint.innerText = 'History started'
//     }
// }
//
// btnNext.onclick = () => {
//     if (currentIndex < indexSave){
//         currentIndex++
//         divHistoryPoint.innerText = localStorage.getItem(`historyPoint${currentIndex}`)
//     } else {
//         divHistoryPoint.innerText = 'History ended'
//     }
// }

// task 4
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// const newContactForm = document.getElementById('newContact')
// const divForAppending = document.getElementById('book')
// const btnShowMyContact = document.createElement('button')
//
// newContactForm.btnSaveContact.innerText = 'Save'
// btnShowMyContact.innerText = 'Show My Contacts'
// document.body.appendChild(btnShowMyContact)
//
// btnShowMyContact.onclick = () => {
//     showContacts()
// }
//
// let arrContacts = []
// let tempUser = []
// const max = 10000
// const min = 1
//
// class Contact {
//     constructor(name, phone, email, firm, department, birthday, id) {
//         this.id = id
//         this.name = name
//         this.phone = phone
//         this.email = email
//         this.firm = firm
//         this.department = department
//         this.bithday = birthday
//
//     }
// }
//
// newContactForm.btnSaveContact.onclick = ev => {
//     ev.preventDefault()
//
//     arrContacts = getContactFromLocalStorage()
//     if (!arrContacts) {
//         arrContacts = []
//         tempUser = setUser()
//         if (tempUser){
//             pushUserInContact(tempUser)
//             showContacts()
//         }
//     } else {
//
//         tempUser = setUser()
//         if (tempUser){
//             deleteIfUserInContacts(tempUser)
//             pushUserInContact(tempUser)
//             showContacts()
//         }
//     }
// }
//
// function getContactFromLocalStorage() {
//     return  JSON.parse(localStorage.getItem('arrContacts'))
// }
//
// function setUser() {
//     const id  = generateRandomId(min, max)
//     tempUser = []
//     for (let i = 0; i < newContactForm.children.length; i++) {
//         const contactField = newContactForm.children[i]
//         if (contactField.type === 'text' || contactField.type === 'date' || contactField.type === 'tel') {
//             if (contactField.value === '') {
//                 alert('Fill All Inputs!!!!')
//                 return false
//             } else {
//                 tempUser.push(contactField.value)
//             }
//         }
//     }
//     tempUser.push(id)
//     return tempUser
// }
//
// function deleteIfUserInContacts(tempUser) {
//     arrContacts = getContactFromLocalStorage()
//     for (let i = 0; i < arrContacts.length; i++) {
//         const objContact = arrContacts[i];
//         if (objContact.id === tempUser[tempUser.length - 1]) {
//             arrContacts.splice(i, 1)
//             localStorage.setItem('arrContacts', arrContacts)
//         }
//     }
// }
//
// function pushUserInContact(tempUser) {
//     const [name, phone, email, firm, department, birthday, id] = tempUser
//     const contact = new Contact(name, phone, email, firm, department, birthday, id)
//     arrContacts.push(contact)
//     localStorage.setItem('arrContacts', JSON.stringify(arrContacts))
// }
//
// function generateRandomId(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }
//
//
// function showContacts() {
//     divForAppending.innerText = ''
//     arrContacts = getContactFromLocalStorage()
//     if (arrContacts) {
//         for (let i = 0; i < arrContacts.length; i++) {
//             const contact = arrContacts[i];
//             const divContact = document.createElement('div')
//             const btnEdit = document.createElement('button')
//             const btnRemove = document.createElement('button')
//             btnEdit.innerText = 'Edit'
//             btnRemove.innerText = 'Remove'
//
//             btnRemove.onclick = () => {
//                 removeContact(arrContacts, i)
//             }
//             btnEdit.onclick = () => {
//                 editContact(arrContacts, i)
//
//
//             }
//             const br = document.createElement('br')
//
//             for (const contactKey in contact) {
//                 if (contactKey !== 'id') {
//                     let divElem = document.createElement('div')
//                     divElem.innerText = contact[contactKey]
//                     divContact.appendChild(divElem)
//                 }
//             }
//             divForAppending.appendChild(br)
//             divForAppending.appendChild(divContact)
//             divForAppending.appendChild(btnEdit)
//             divForAppending.appendChild(btnRemove)
//         }
//     }
// }
//
// function editContact(arrContacts, index) {
//     const editableContact = arrContacts[index]
//
//     for (let i = 0; i < newContactForm.children.length; i++) {
//         const contactField = newContactForm.children[i]
//         if (contactField.type === 'text' || contactField.type === 'date' || contactField.type === 'tel') {
//             for (const key in editableContact) {
//                 if(contactField.name === key){
//                     contactField.value = editableContact[key]
//                 }
//             }
//         }
//     }
//     arrContacts.splice(index, 1)
//     localStorage.setItem('arrContacts', JSON.stringify(arrContacts))
// }
//
// function removeContact(arrContacts ,index) {
//     arrContacts.splice(index,1)
//     if (arrContacts.length !== 0){
//         localStorage.setItem('arrContacts', JSON.stringify(arrContacts))
//         showContacts()
//     }else {
//         localStorage.clear()
//         showContacts()
//     }
// }


