//============================== Event Loop ================================
// Что такое Event Loop ?
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
//
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


// Почему акцентируется внимание про МАКРОТАСКУ?


//============================== ИТОГО ===============================





