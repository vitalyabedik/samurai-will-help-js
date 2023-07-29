//============================== Event Loop ================================
// Что такое Event Loop ?

// Что позволяет делать?

//============================== Call stack ================================
// Что такое Call stack (стэк)

// последовательный вызов функций

// Здесь функции выполняются одна за другой
// function sum(a, b) {
//     return a + b
// }
//
// const first = sum(5,5)
// const second = sum(1,2)
// const third = sum(3,4)

// вызов функций, по аналогии с стопкой бумаг
// здесь идет аналогия с стопкой бумаг
// function first() {
//     console.log('first')
// }
//
// function second() {
//     console.log('second')
//     first()
// }
//
// function third() {
//     console.log('third')
//     second()
// }
//
// third()

// Что если мы хотим показать пользователю код, отложенным через какое-то время (асинхронный)

// function log(value) {
//     console.log(value)
// }
//
// log('Start!')
//
// Promise.resolve('Promise!')
//     .then(res => log(res))
//
//
// log('End!')

// Start  End  Promise

//============================== Task queue (очередь) ================================
// Кто управляет очередями?

// Как между собой общаются call stack и очередь?

// Какие очереди существуют и что к ним относится?

// В каком порядке их берет Event Loop (что выполняется быстрее)?

//============================== Задача на закрепление 1 ===============================

// function log(value) {
//     console.log(value)
// }
//
// log('Start!')
//
// setTimeout(() => {
//     log('Timeout!')
// }, 0)
//
// Promise.resolve('Promise!').then((res) => {
//     log(res)
// })
//
// log('End!')

//============================== Задача на закрепление 2 ===============================

// function log(value) {
//     console.log(value)
// }
//
// const one = () => Promise.resolve('One!')
//
// async function myFunc() {
//     log('In function')
//     const res = await one()
//     log(res)
// }
//
// log('Before function')
// myFunc()
// log('After function')

// Before function 'In function'  'After function' 'One!'

// micro: Promise: 'One!'
// macro:

// Почему акцентируется внимание про МАКРОТАСКУ?

//============================== ИТОГО ===============================

//====================== Задача 1 ===============

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
//
//
// console.log('end');

// start 1 end

//====================== Задача 2 ===============
// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
//
// promise1.then(res => {
//     console.log(res)
// })
//
// console.log('end');

// start 1 end 2

//====================== Задача 3  ===============

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })
//
// promise1.then(res => {
//     console.log(res)
// })
//
// console.log('end');

// start 1 3 end 2

//====================== Задача 4  ===============

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
//
// promise1.then(res => {
//     console.log(2)
// })
//
// console.log('end');

// start 1 end

//====================== Задача 5  ===============

// console.log('start')
//
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// }))
//
// console.log('middle')
//
// fn().then(res => {
//     console.log(res)
// })
//
// console.log('end')

// start middle 1 end success

//====================== Задача 6  ===============

// console.log('start')
//
// Promise.resolve(1).then((res) => {
//     console.log(res)
// })
//
// Promise.resolve(2).then((res) => {
//     console.log(res)
// })
//
// console.log('end')

// start end 1 2

//====================== Задача 7  ===============

// console.log('start')
//
// setTimeout(() => {
//     console.log('setTimeout')
// })
//
// Promise.resolve()
//     .then(() => {
//     console.log('resolve1')
// })
//
//
// console.log('end')

// start end resolve setTimeout

//====================== Задача 8  ===============

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log("timerStart");
//         resolve("success");
//         console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });
//
// promise.then((res) => {
//     console.log(res);
// });
//
// console.log(4);

// 1 2 4 success timerStart timerEnd

//====================== Задача 9  ===============
// const timer1 = setTimeout(() => {
//     console.log('timer1');
//
//     const promise1 = Promise.resolve().then(() => {
//         console.log('promise1')
//     })
// }, 0)
//
// const timer2 = setTimeout(() => {
//     console.log('timer2')
// }, 0)

// timer1 promise1 timer2

//====================== Задача 10  ===============
// console.log('start');
//
// const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//
//     const timer2 = setTimeout(() => {
//         console.log('timer2')
//     }, 0)
// });
//
// const timer1 = setTimeout(() => {
//     console.log('timer1')
//
//     const promise2 = Promise.resolve().then(() => {
//         console.log('promise2')
//     })
// }, 0)
//
// console.log('end');

// start end  promise1 timer1 promise2 timer2

//====================== Задача 11  ===============

// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.resolve().then(() => console.log(3));
//
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
//
// Promise.resolve().then(() => console.log(5));
//
// setTimeout(() => console.log(6));
//
// console.log(7);

// 1 7 3 5 2 6 4

//mi  3         4      5
//ma  2            4    6

//====================== Задача 12  ===============

// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.reject(3).catch(console.log);
//
// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));
//
// Promise.resolve(5).then(console.log);
//
// console.log(6);
//
// setTimeout(() => console.log(7),0);

// 1 6 3 5 2 4 7

//====================== Задача 14  ===============

// console.log(1);
//
// setTimeout(() => console.log(2), 1000);
//
// console.log(3);
//
// new Promise((res) => res(4)).then((data) => console.log(data));
//
// setTimeout(() => console.log(5), 2000);
//
// Promise.resolve(6).then((data) => console.log(data));
//
// new Promise((res) => setTimeout(() => res(7), 3000)).then((data) =>
//     console.log(data)
// );

// 1 3 4 6 2 5 7

// ma 2(1сек),  5(2сек),   7(3сек)
// mi 4,  6

//====================== Задача 15  ===============

// setTimeout(() => console.log(5), 0);
//
// new Promise((res) => res(1)).then((data) => console.log(data));
//
// setTimeout(() => console.log(2), 1000);
//
// Promise.resolve(3).then((data) => console.log(data));
//
// console.log(4);
//
// new Promise((res) => setTimeout(() => res(7), 2000)).then((data) =>
//     console.log(data)
// );
//
// for (let i = 0; i < 2; i++) {
//     console.log(i);
// }

// 4 0 1 1 3 5 2 7

// mi: 1, 3,                     7(2 сек)
// ma: 5(0 сек), 2(1 сек)

//====================== Задача 16  ===============
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0);
//
// Promise
//     .resolve()
//     .then(function() {
//         console.log('promise1');
//     })
//     .then(function() {
//         console.log('promise2');
//     });
//
// console.log('script end');

// script start  'script end' 'promise1' promise2  setTimeout

//====================== Задача 17  ===============
// let a = 5;
// setTimeout(function timeout() {
//     console.log(a);
//     a = 10;
// }, 0);
//
// const promise = new Promise(function(resolve, reject) {
//     console.log(a);
//     a = 25;
//     resolve();
// });
//
// // p.then(function(){
// //     // some code
// // });
//
// console.log(a);

// 5 25 25

//====================== Задача 18  ===============

// function resolveAfter2Seconds(x) {
//     console.log(`Какой Х пришёл -> ${x}`)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, 5000);
//     });
// }
//
// async function add1(x) {
//     console.log('add1 Hello')
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     console.log('add1 Bye')
//     return x + a + b;
// }
//
// console.log(add1(10));

// add1 Hello  20 30 add1 Bye 60

//====================== Задача 19  ===============
// async function first() {
//   console.log(9);
//   await Promise.resolve(2).then(r => console.log(r)).then(() => {
//     console.log(0);
//     return Promise.resolve(3).then(r => console.log(r));
//   })
// }


// async function first() {
//   console.log(9);
//   await Promise.resolve(2).then(r => console.log(r))
//   console.log(0);
//   await Promise.resolve(3).then(r => console.log(r));
// }
//
// async function second() {
//   console.log(10);
//   await Promise.resolve(4).then(r => console.log(r));
//   console.log(11);
//   await Promise.resolve(5).then(r => console.log(r));
// }
//
// first();
// second();
//
// // 9 10 2 4 new Promise 0 11
// // mi:
// //
//
// const promises = Promise.resolve('new Promise');
// promises.then(str => console.log(str));

// 9     2 0 3 10 4 11 5 new Promise
// 9 10 2 4 new Promise 0 11 3 5
// mi: 2 4 new Promise 3 5
// ma:

//====================== ***Задача 20***  ===============
//====================== Задача на поломай голову от подписчика)) =========================

// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
//
// setTimeout(() => console.log('in setTimeout1'), 1000);
//
// myPromise(1000).then(res => console.log('in Promise 1'));
//
// setTimeout(() => console.log('in setTimeout2'), 100);
//
// myPromise(2000).then(res => console.log('in Promise 2'));
//
// myPromise(1000).then(res => console.log('in Promise 3'));
//
// setTimeout(() => console.log('in setTimeout4'), 1000);
//
// myPromise(5000).then(res => console.log('in Promise '));

/*
in setTimeout2
in setTimeout1
in Promise 1
in Promise 3
in setTimeout4
in Promise 2
in Promise
 */
