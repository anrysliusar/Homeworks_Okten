//task 1
// ==============================================
//-Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// ==============================================

// function TagsDescription(titleOfTag, action, attrs) {
//     this.titleOfTags = titleOfTag;
//     this.action = action;
//     this.attrs = attrs
// }
//
// const tagA = new TagsDescription('a', 'Предназначен для создания ссылок', [{titleOfAttr : 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'}, {titleOfAttr : 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}])
// const taDiv = new TagsDescription('div', 'Предназначен для выделения фрагмента документа с целью изменения вида содержимого', [{titleOfAttr : 'align', actionOfAttr: 'Задает выравнивание содержимого тега'}, {titleOfAttr : 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}])
// const tagH1 = new TagsDescription('h1', 'Представляет собой наиболее важный заголовок первого уровня', [{titleOfAttr : 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}, {titleOfAttr : 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}])
// const tagSpan = new TagsDescription('span', 'Предназначен для определения строчных элементов документа.', [{titleOfAttr : 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра.'}, {titleOfAttr : 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента'}])
// const tagInput = new TagsDescription('input', 'Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', [{titleOfAttr : 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {titleOfAttr : 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'}])
// const tagForm = new TagsDescription('form', 'Устанавливает форму на веб-странице. ', [{titleOfAttr : 'enctype', actionOfAttr: 'Способ кодирования данных формы.'}, {titleOfAttr : 'method', actionOfAttr: 'Метод протокола HTTP.'}])
// const tagOption = new TagsDescription('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера select', [{titleOfAttr : 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'}, {titleOfAttr : 'label', actionOfAttr: 'Указание метки пункта списка.'}])
// const tagSelect = new TagsDescription('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка', [{titleOfAttr : 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'}, {titleOfAttr : 'size', actionOfAttr: 'Количество отображаемых строк списка.'}])

//task 2
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

// class TagsDescription {
//     constructor(titleOfTags, action, attrs) {
//         this.titleOfTags = titleOfTags;
//         this.action = action;
//         this.attrs = attrs
//     }
// }
//
// const tagA = new TagsDescription('a', 'Предназначен для создания ссылок', [{titleOfAttr : 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'}, {titleOfAttr : 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}])
// const taDiv = new TagsDescription('div', 'Предназначен для выделения фрагмента документа с целью изменения вида содержимого', [{titleOfAttr : 'align', actionOfAttr: 'Задает выравнивание содержимого тега'}, {titleOfAttr : 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}])
// const tagH1 = new TagsDescription('h1', 'Представляет собой наиболее важный заголовок первого уровня', [{titleOfAttr : 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}, {titleOfAttr : 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}])
// const tagSpan = new TagsDescription('span', 'Предназначен для определения строчных элементов документа.', [{titleOfAttr : 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра.'}, {titleOfAttr : 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента'}])
// const tagInput = new TagsDescription('input', 'Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', [{titleOfAttr : 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {titleOfAttr : 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'}])
// const tagForm = new TagsDescription('form', 'Устанавливает форму на веб-странице. ', [{titleOfAttr : 'enctype', actionOfAttr: 'Способ кодирования данных формы.'}, {titleOfAttr : 'method', actionOfAttr: 'Метод протокола HTTP.'}])
// const tagOption = new TagsDescription('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера select', [{titleOfAttr : 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'}, {titleOfAttr : 'label', actionOfAttr: 'Указание метки пункта списка.'}])
// const tagSelect = new TagsDescription('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка', [{titleOfAttr : 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'}, {titleOfAttr : 'size', actionOfAttr: 'Количество отображаемых строк списка.'}])

//task 3
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: 'fabia',
//     producer: 'skoda',
//     yearOfManufacture: '2015',
//     maxSpeed: 260,
//     volume: 1.6,
//     drive () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     },
//     info () {
//         return `Виробник: ${this.producer}, модель: ${this.model}, рік випуску: ${this.yearOfManufacture}, об'єм двигуна: ${this.volume}`
//     },
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed
//     },
//     changeYear (newValue) {
//         this.yearOfManufacture = newValue
//     },
//     addDriver (driver) {
//         this.driver = driver
//     }
// }

//task 4
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, producer, yearOfManufacture, maxSpeed, volume) {
//     this.model = model
//     this.producer = producer
//     this.yearOfManufacture = yearOfManufacture
//     this.maxSpeed = maxSpeed
//     this.volume = volume
//     this.drive = () => {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//     this.info = () => {
//         return `Виробник: ${this.producer}, модель: ${this.model}, рік випуску: ${this.yearOfManufacture}, об'єм двигуна: ${this.volume}`
//     }
//     this.increaseMaxSpeed = (newSpeed) => {
//         this.maxSpeed += newSpeed
//     }
//     this.changeYear = (newValue) => {
//         this.yearOfManufacture = newValue
//     }
//     this.addDriver = (driver) => {
//         this.driver = driver
//     }
// }


//task 5
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, producer, yearOfManufacture, maxSpeed, volume) {
//         this.model = model
//         this.producer = producer
//         this.yearOfManufacture = yearOfManufacture
//         this.maxSpeed = maxSpeed
//         this.volume = volume
//     }
//     drive() {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//     info() {
//         return `Виробник: ${this.producer}, модель: ${this.model}, рік випуску: ${this.yearOfManufacture}, об'єм двигуна: ${this.volume}`
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//     changeYear(newValue) {
//         this.yearOfManufacture = newValue
//     }
//     addDriver(driver) {
//         this.driver = driver
//     }
// }


//task 6
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name
//         this.age = age
//         this.footSize = footSize
//     }
// }
//
// const nastia = new Cinderella('Anastasia', 18, 38)
// const karine = new Cinderella('Karine', 17, 37)
// const olga = new Cinderella('Olga', 19, 36)
// const julia = new Cinderella('Julia', 20, 39)
// const sofia = new Cinderella('Sofia', 21, 35)
// const annya = new Cinderella('Annya', 23, 34)
// const alla = new Cinderella('Alla', 19, 33)
// const ksenia = new Cinderella('Ksenia', 25, 40)
// const ira = new Cinderella('Ira', 24, 32)
//
// const ladies = [nastia, karine, olga, julia, sofia, annya, alla, ksenia, ira]
//
// class Prince {
//     constructor(name, age, slipperSize) {
//         this.name = name
//         this.age = age
//         this.slipperSize = slipperSize
//     }
//     findMyLady(ladies){
//         for (const lady of ladies) {
//             if (lady.footSize === this.slipperSize){
//                 return `${this.name} знайшов свою попелюшку, нею виявилась - ${lady.name}`
//             }
//         }
//     }
// }
// const slavik = new Prince('Slavik', 18, 35)
// console.log(slavik.findMyLady(ladies));

//task 7
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name, age, footSize) {
//         this.name = name
//         this.age = age
//         this.footSize = footSize
// }
//
// const nastia = new Cinderella('Anastasia', 18, 35)
// const karine = new Cinderella('Karine', 17, 37)
// const olga = new Cinderella('Olga', 19, 36)
// const julia = new Cinderella('Julia', 20, 39)
// const sofia = new Cinderella('Sofia', 21, 38)
// const annya = new Cinderella('Annya', 23, 34)
// const alla = new Cinderella('Alla', 19, 33)
// const ksenia = new Cinderella('Ksenia', 25, 40)
// const ira = new Cinderella('Ira', 24, 32)
//
// const ladies = [nastia, karine, olga, julia, sofia, annya, alla, ksenia, ira]
//
// function Prince(name, age, slipperSize) {
//     this.name = name
//     this.age = age
//     this.slipperSize = slipperSize
//     this.findMyLady = (ladies) => {
//         for (const lady of ladies) {
//             if (lady.footSize === this.slipperSize){
//                 return `${this.name} знайшов свою попелюшку, нею виявилась - ${lady.name}`
//             }
//         }
//     }
// }
// const slavik = new Prince('Slavik', 18, 35)
// console.log(slavik.findMyLady(ladies));