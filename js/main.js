/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
let myNum = 10;
document.write(`Task 1: <br> myNum: ${myNum} <br>`);

// ім'я змінної: myStr, значення: 'some string'
let myStr = "some string";
document.write(`myStr: ${myStr} <br>`);

// ім'я змінної: myBool, значення: true
let myBool = true;
document.write(`myBool: ${myBool} <br>`);

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
let myArr = [1, 2, 3, 4, 5];
document.write(`myArr: ${myArr} <br>`);

// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
let myObj = {
  first: "First Name",
  last: "Last Name",
};
document.write(`myObj: ${myObj} <br>`);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

let decimal2 = parseFloat(myNum).toFixed(2);
document.write(`<br> Task 2: <br> decimal2 = ${decimal2} <br>`);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

let i = 1;
let a = ++i;
document.write(
  "<br>" +
    "Task 3:" +
    "<br>" +
    "Префіксний інкремент: " +
    a +
    "<br>" +
    i +
    "<br>"
);
console.log("Префіксний інкремент: " + a + " і " + i); // префіксний інкремент

let b = i++;
document.write("Постфіксний інкремент: " + b + "<br>" + i + "<br>");
console.log("Постфіксний інкремент: " + b + " і " + i); // постфіксний інкремент

let c = --i;
document.write("Префіксний декремент: " + c + "<br>" + i + "<br>");
console.log("Префіксний декремент: " + c + " і " + i); // префіксний декремент

let d = i--;
document.write("Постфіксний декремент: " + d + "<br>" + i + "<br>");
console.log("Постфіксний декремент: " + d + " і " + i); // постфіксний декремент

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 20;
myTest += myNum;
document.write("<br>" + "Task 4:" + "<br>" + "+= - " + myTest);
console.log("Task 4: " + "+= - " + myTest);

myTest -= myNum;
document.write("<br>" + "-= - " + myTest);
console.log("-= - " + myTest);

myTest *= myNum;
document.write("<br>" + "*= - " + myTest);
console.log("*= - " + myTest);

myTest /= myNum;
document.write("<br>" + "/= - " + myTest);
console.log("/= - " + myTest);

myTest %= myNum;
document.write("<br>" + "%= - " + myTest + "<br>");
console.log("%= - " + myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
let myPi = Math.PI;
document.write("<br>" + "Task 5: " + "<br>" + "Pi - " + myPi);
console.log("Task 5: " + "Pi - " + myPi);

// округлене значення числа 89.279 → myRound
let myRound = Math.round(89.279);
document.write("<br>" + "Округлення числа 89.279 - " + myRound);
console.log("Округлення числа 89.279 - " + myRound);

// випадкове число між 0..10 → myRandom
let myRandom = Math.random() * 10;
document.write("<br>" + "Випадкове число між 0..10 - " + myRandom);
console.log("Випадкове число між 0..10 - " + myRandom);

// 3 у 5 степені → myPow
let myPow = Math.pow(3, 5);
document.write("<br>" + "3 у 5 степені - " + myPow + "<br>");
console.log("3 у 5 степені - " + myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

let str1 = "Мама мыла раму, рама мыла маму";
let strObj = {
  str1: str1,
  length: str1.length,
};
document.write(
  "<br>" +
    "Task 6: " +
    "<br>" +
    "strObj.str = " +
    strObj.str1 +
    "<br>" +
    "strObj.lenth = " +
    strObj.length +
    "<br>"
);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

let isRamaPos = str1.indexOf("рама");
let isRama = str1.includes("рама");
document.write(
  "<br>" +
    "Task 7: " +
    "<br>" +
    "Індекс входження - " +
    isRamaPos +
    "<br>" +
    "Корректність - " +
    isRama +
    "<br>"
);
console.log("Task 7: " + "Індекс входження - " + isRamaPos);
console.log("Корректність - " + isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

let strReplace = str1
  .replace("Мама мыла", "Мама моет")
  .replace("рама мыла", "Рама держит");
document.write(
  "<br>" +
    "Task 8: " +
    "<br>" +
    "Вихідний рядок - " +
    str1 +
    "<br>" +
    "Результат - " +
    strReplace +
    "<br>"
);
console.log("Task 8: " + "Вихідний рядок - " + str1);
console.log("Результат - " + strReplace);
/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

let someStr = "some STRING";
let upperStr = someStr.toUpperCase();
document.write("<br>" + "Task 9: " + "<br>" + "Верхній регістр - " + upperStr);
console.log("Task 9: " + "Верхній регістр - " + upperStr);

let lowerStr = someStr.toLowerCase();
document.write("<br>" + "Нижній регістр - " + lowerStr);
console.log("Нижній регістр - " + lowerStr);
