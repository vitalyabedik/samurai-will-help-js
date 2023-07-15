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

// function log(value) {
//     console.log(value)
// }
//
// console.log('start')
//
// setTimeout(() => {
//     log('timeout')
// }, 3000)
//
// log('end')


//============================== Task queue (очередь) ================================
// Кто управляет очередями?


// function log(value) {
//     console.log(value)
// }

// log('1')

// setTimeout(() => {
//     log('2')
// }, 0)
//
// Promise.resolve().then(() => {
//     log('3')
// })
//
// log('4')


// Как между собой общаются call stack и очередь?



// Какие очереди существуют и что к ним относится?


// В каком порядке их берет Event Loop (что выполняется быстрее)?


// Почему акцентируется внимание про МАКРОТАСКУ?


//============================== ИТОГО ===============================







