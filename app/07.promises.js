console.log("Topic: Promises");
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
// const promise = new Promise(() => {
//     console.log("Promise is created");
// });

// console.log(promise);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const promiseRes = Promise.resolve("Promise data");
// console.log(promiseRes);
// promiseRes.then(console.log);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
// const promiseRej = Promise.reject("Promise error");
// console.log(promiseRej);
// promiseRej.then(() => {}, console.log);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const p4 = new Promise(resolve => {
//     setTimeout(resolve, 3000, "Promise data");
// });
// console.log(p4);
// p4.then(console.log);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
// const handlePromise = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess(data) {
//         console.log(data);
//         return data;
//     },
//     onError(error) {
//         console.log(error);
//     }
// };
// document.querySelector("#btn-create-promise").addEventListener("click", () => {
//     handlePromise.promise = new Promise((resolve, reject) => {
//         console.log("Promise is created");
//         handlePromise.resolve = resolve;
//         handlePromise.reject = reject;
//     })
//         .then(handlePromise.onSuccess)
//         .then(handlePromise.onSuccess)
//         .catch(handlePromise.onError);
// });

// document.querySelector("#btn-resolve-promise").addEventListener("click", () => {
//     handlePromise.resolve && handlePromise.resolve("Some data");
// });

// document.querySelector("#btn-reject-promise").addEventListener("click", () => {
//     handlePromise.reject && handlePromise.reject("Some error");
// });

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then

// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.
// const p7 = new Promise(resolve => {
//     setTimeout(resolve, 1000, "My name is");
// });
// function onSuccess(data) {
//     throw new Error("Exception in onSuccess");
//     // return `${data} A`;
// }
// function print(data) {
//     console.log(data);
// }
// p7.then(onSuccess)
//     .then(print)
//     .catch(print);

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData
// function getPromiseData(promise) {
//     promise.then(console.log);
// }
// const o = {
//     name: "Anna"
// };
// getPromiseData(Promise.resolve(o));

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль
// const p10_1 = new Promise(resolve => {
//     setTimeout(resolve, 2000, { name: "Anna" });
// });
// const p10_2 = new Promise(resolve => {
//     setTimeout(resolve, 3000, { age: 16 });
// });
// const p10 = Promise.all([p10_1, p10_2]).then(([o1, o2]) => {
//     console.log({ ...o1, ...o2 });
// });

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.
// const p10_1 = new Promise(resolve => {
//     setTimeout(resolve, 2000, { name: "Anna" });
// });
// const p10_2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 3000, "Promise error");
// });
// const p10 = Promise.all([p10_1, p10_2])
//     .then(([o1, o2]) => {
//         console.log({ ...o1, ...o2 });
//     })
//     .catch(console.log);

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.

const p12_1 = new Promise(resolve => {
    setTimeout(resolve, 5000, "Promise Data");
});

let handle;
const p12_2 = new Promise((resolve, reject) => {
    handle = reject;
});
document.querySelector("#btn-create-promise").addEventListener("click", () => {
    handle("Stop");
});
Promise.race([p12_1, p12_2])
    .then(console.log)
    .catch(console.log);
