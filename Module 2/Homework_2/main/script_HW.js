//task 1
//Cтворити масив та вивести його в консоль: з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//**********************************************************************************************************************

let arrayOfNum = [1, 2, 3, 4, 5];
console.log(arrayOfNum);

let arrayOfStr = ['a', 's', 'd', 'f', 'g'];
console.log(arrayOfStr);

let arrayOfDifferValues = [1, 'a', true, 3, false];
console.log(arrayOfDifferValues);

let arrayOfAnyValues = [];
arrayOfAnyValues[0] = 'w1';
arrayOfAnyValues[1] = 'sdsd';
arrayOfAnyValues[2] = 'dfg';
console.log(arrayOfAnyValues)
//task 2
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//**********************************************************************************************************************

for (let i = 0; i < 10; i++) {
    document.write('<div>task2.1</div>');
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>task2.2 ${i} </div>`);
}
let i = 0;
while (i < 20) {
    document.write(`<div>task2.3</div>`);
    i++;
}
i = 0
while (i < 20) {
    document.write(`<div>task2.4 ${i} </div>`);
    i++;
}

//task 3
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//**********************************************************************************************************************

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}

let arrayOfString = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'];
for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfString[i]);
}

let arrayOfAnyValue = ['*****', 's', 'd', 1, 2, 3, true, false, 4, 'aqdwd12'];
for (let i = 0; i < arrayOfAnyValues.length; i++) {
    console.log(arrayOfAnyValue[i]);
}

//task 4
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//**********************************************************************************************************************
console.log('*************************')
let arrayForBoolValues = [];
let arrayForStrValues = [];
let arrayForNumValues = [];

let newArrayOfAnyValues = ['*****', 's', 'd', 1, 2, 3, true, false, 4, 'aqdwd12'];
for (let i = 0; i < newArrayOfAnyValues.length; i++)
    if ((typeof newArrayOfAnyValues[i]) == "boolean") {
        arrayForBoolValues.push(newArrayOfAnyValues[i])
    } else if ((typeof newArrayOfAnyValues[i]) == "string") {
        arrayForStrValues.push(newArrayOfAnyValues[i])
    } else if ((typeof newArrayOfAnyValues[i]) == "number") {
        arrayForNumValues.push(newArrayOfAnyValues[i])
    }
console.log('arrayForBoolValues: ', arrayForBoolValues);
console.log('arrayForStrValues: ', arrayForStrValues);
console.log('arrayForNumValues: ', arrayForNumValues);

//task 5
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//**********************************************************************************************************************

let NEWarrayOfAnyValues = [];
//Наповню порожній масив значеннями уже існуючого масиву
for (let i = 0; i < newArrayOfAnyValues.length; i++)
    NEWarrayOfAnyValues[i] = newArrayOfAnyValues[i]
console.log(NEWarrayOfAnyValues)

//task 6
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//**********************************************************************************************************************

for (let i = 0; i < 10; i++) {
    document.write(`Крок № ${i + 1}`, '<br>');
    console.log(`Крок № ${i + 1}`);
}

for (let i = 0; i < 100; i++) {
    document.write(`Крок № ${i + 1}`, '<br>');
    console.log(`Крок № ${i + 1}`);
}
let numOfStep = 1
for (let i = 0; i < 200; i += 2) {
    document.write(`Крок № ${numOfStep}`, '<br>');
    console.log(`Крок № ${numOfStep}`);
    numOfStep++
}


for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        document.write(`Крок № ${i}`, '<br>');
        console.log(`Крок № ${i}`);
    }
}

for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        document.write(`Крок № ${i}`, '<br>');
        console.log(`Крок № ${i}`);
    }
}

// task 7
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// **********************************************************************************************************************

for (let minute = 0; minute < 3; minute++) {
    for (let second = 0; second < 60; second++) {
        document.write(`${minute} хвилин(а), ${second} секунд(а)`, '<br>')
        if (minute == 2) {
            break;
        }
    }
}


for (let hour = 0; hour < 3; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        for (let second = 0; second < 60; second++) {
            document.write(`${hour} годин(а), ${minute} хвилин(а), ${second} секунд(а)`, '<br>')
            if (hour == 2 && minute == 20) {
                break;
            }
        }
        if (hour == 2 && minute == 20) {
            break;
        }
    }
}

// task 8
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// **********************************************************************************************************************

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

i = 0
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

while (i < arr.length) {
    if (i % 2 == 1) {
        console.log(arr[i]);
    }
    i++;
}

for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
        console.log(arr[i]);
    }
}

while (i < arr.length) {
    if (i % 2 == 0) {
        console.log(arr[i]);
    }
    i++;
}

for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        console.log(arr[i]);
    }
}

for (let i = 0; i < arr.length; i++) {
    if (i % 3 == 0) {
        arr[i] = 'okten'
    }
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 3 == 0) {
        arr[i] = 'okten';
    }

}

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(arr[i]);
    }
}

i = arr.length - 1
while (i >= 0) {
    if (i % 2 == 0) {
        console.log(arr[i]);
    }
    i--;
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(arr[i]);
    }
}

i = arr.length - 1
while (i >= 0) {
    if (i % 2 == 1) {
        console.log(arr[i]);
    }
    i--;
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 == 1) {
        console.log(arr[i]);
    }
}

//task 9
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// **********************************************************************************************************************

let newArr = ['a', 'b', 'c'];
let word = '';

for (i = 0; i < newArr.length; i++) {
    word += newArr[i];
}
console.log(word);

word = '';
i = 0
while (i < newArr.length) {
    word += newArr[i];
    i++;
}
console.log(word);

word = '';
for (let str of newArr) {
    word += str;
}
console.log(word);