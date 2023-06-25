//============================== Лексическое окружение - LE (Lexical Environment) ================================
// Что такое лексическое окружение?

/*
LE (Lexical Environment) - это скрытый (невидимый) объект,
который есть у любого блока, скрипта или функции в JS
 */

// lexicalEnvironment = {
//     environmentsRecords: {
//
//     },
//     outerLE -> ссылка
// }
//
// lexicalEnvironment = {
//     переменные: {
//         в текущей области видимости
//     },
//     ссылка: --> на внешнее лексическое окружение
// }

// lexicalEnvironment = {
//     переменные: {},
//     ссылка: --> на null
// }

// globalLE {} --> null

//============================== Глобальный scope (globalLE) ==========================================
// globalLE {} --> null


// let name = 'Vitali'  // globalLE {name: 'Vitali'} --> null
// let age = 20         // // globalLE {name: 'Vitali', age: 20} --> null

//============================== Scope в блоках кода ==========================================
// if, else; циклы for, while


// let a = 10
//
// if (a >= 10) {
//     //{}
//     a = 20 // {a: 20}
// }
//
// console.log(a)

// !!! Исключение - объект не создает scope


//============================== var ==========================================
// globalLE {a: undefined} --> null

// hoisting -> var + func decl
// var a
//
// a = 5            // globalLE {a: 5} --> null
//
// console.log(a)

// ====================================
// globalLE {} --> null


// a = 5            // уплывает наверх
//
// console.log(a)


// globalLE {} --> null
// a = 5
//
// let a
// console.log(a)



//============================== Scope в функциях ==========================================
// globalLE {abc: Function} --> null
//
//
//
// function abc() {
//     // [[Environments]] --> globalLe
//     console.log(10)
// }
//
// abc()
// //
// // globalLE {} --> null
//
// const abc1 = () =>  {          // globalLE {abc1: Function} --> null
//     // [[Environments]] --> globalLe
//     // abc1LE {}
//     let a = 10      // abc1LE {a: 10}
//     console.log(a)  // abc1LE {a: 10}
// }
//
// abc1()



//
// globalLE {} --> null

// let a = 10               // globalLE {a: 10}
// const abc1 = () =>  {    // globalLE {a: 10, abc1: Function}
//        // [[Environments]] --> globalLe
//        // abc1LE {}
//     console.log(a)     // abc1LE {}
// }
//
// abc1()

//
// let a = 10               // globalLE {a: 10}
// const abc1 = () =>  {    // globalLE {a: 10, abc1: Function}
//     // [[Environments]] --> globalLe
//     // abc1LE {}
//     console.log(a)      // abc1LE {}
//     a = 20              // abc1LE {a: 20}
//     console.log(a)     // abc1LE {a: 20}
// }
//
// abc1()




// globalLE {} --> null
// const abc1 = (a) =>  {    // globalLE {a: 10, abc1: Function}
//     // [[Environments]] --> globalLe
//     // abc1LE {a: 10}
//     console.log(a)      // abc1LE {a: 10}
//     a = 20              // abc1LE {a: 20}
//     console.log(a)     // abc1LE {a: 20}
// }
//
// abc1(10)


//============================== [[Environment]] ==========================================



//============================== Пример 1 ==========================================

// !!!----------------------------------------------------!!!
// const name = 'Alex'
//
// const foo = () => {
//     const hello = 'Hello'
//     console.log(hello + ' ' + name)
// }
// !!!----------------------------------------------------!!!
//1: globalLE {} --> null

// const name = 'Alex'                   //2: globalLE {name: "Alex"} --> null
//
// const foo = () => {                   //3: globalLE {name: "Alex", foo: Function} --> null
//                                       //3': [[Environments]] --> globalLe
//                                       //5: fooLE: {}
//     const hello = 'Hello'             //6: fooLE: {hello: 'Hello'}
//     console.log(hello + ' ' + name)   //7: fooLE: {hello: 'Hello'}
// }
//                                       //8: [[Environments]] --> globalLE {name: "Alex", foo: Function} --> null
// foo()                                 //4: вызов

//

// const name = 'Alex'                   //2: globalLE {name: "Alex"} --> null
//
// const foo = () => {                   //3: globalLE {name: "Alex", foo: Function} --> null
//     //3': [[Environments]] --> globalLe
//     //5: fooLE: {}
//     const name = 'Den'                //6: fooLE: {name: 'Den'}
//     const hello = 'Hello'             //7: fooLE: {name: 'Den', hello: 'Hello'}
//     console.log(hello + ' ' + name)   //8: fooLE: {name: 'Den', hello: 'Hello'}
// }
//
// foo()                                 //4: вызов



//============================== Пример 2 ==========================================

// !!!----------------------------------------------------!!!
// 1: globalLE {} --> null

// const name = 'Alex'                             //2: globalLE {name: 'Alex'} --> null
//
// const func1 = () => {                           //3: globalLE {name: 'Alex', func1: Function} --> null
//                                                 //3': [[Environments]] --> globalLe
//     //5: func1LE: {func2: Function}
//     const hello = 'Hello'                       //6: func1LE: {hello: 'Hello, func2: Function}
//     console.log(hello + ' ' + name)             //7: func1LE: {hello: 'Hello, func2: Function} => Hello Alex
//
//     function func2(age) {
//                                                 //5': [[Environments]] --> func1LE
//                                                 //9:  func2LE: {age: 23}
//         console.log(`${hello} ${name} ${age}`)  //10: func2LE: {age: 23}
//     }
//
//     func2(23)                               //8: вызов
// }
//
// func1()                                         //4: вызов
// !!!----------------------------------------------------!!!


//============================== Пример 3 ==========================================
// !!!----------------------------------------------------!!!
// const name = 'Alex'
//
// const func1 = () => {
//     const hello = 'Hello'
//     console.log(hello + ' ' + name)
//
//     function func2(age) {
//         console.log(`${hello} ${name} ${age}`)
//     }
//
//     func2(23)
// }
//
// func1()

// const name = 'Vitalya'
// !!!----------------------------------------------------!!!


// let name = 'Alex'
//
// const func1 = () => {
//     const hello = 'Hello'
//     console.log(hello + ' ' + name)              //  'Hello Alex'
//
//     function func2(age) {
//         console.log(`${hello} ${name} ${age}`)   //  'Hello Alex 23'
//     }
//     name = 'Vitali'
//     func2(23)
//     name = 'Lenya'
// }
//
// name = 'Nikita'
//
// func1()
//
//
// name = 'Vitalya'


//============================== Пример 4 ==========================================
// let phrase = "Hello";
//
//
// function sayHi() {
//     let user = "John";
//
//     function abc() {
//         console.log(123)
//         console.log(`${phrase}, ${user}`);
//     }
//
//     abc()
// }
//
// sayHi();



// 1: globalLE {sayHi: Function} --> null
// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         console.log(`${phrase}, ${user}`);
//     }
// }
//
// console.log(sayHi)
// sayHi();


//=============================Замыкание (Closures)==================================



//=============================Пример 1==================================
// !!!----------------------------------------------------!!!
// const counterCreator = () => {
//    let count = 0
//
//     return () => {
//         console.log(++count)
//     }
// }
//
// const counter = counterCreator()
// counter()
// counter()
// counter()
// !!!----------------------------------------------------!!!


//=============================Пример 2==================================

// !!!----------------------------------------------------!!!
// const counterCreator = () => {
//    let count = 0
//
//     return () => {
//         console.log(++count)
//     }
// }
//
// const counter1 = counterCreator()
// const counter2 = counterCreator()

// counter1()
// counter2()
// counter1()
// counter2()
// !!!----------------------------------------------------!!!
//  globalLE -> {counter1: Function, counter2: Function,} -> null


//=============================!!!Доп задачи!!!==================================

// function foo(a) {
//
//     return function zoo(b) {
//         return a + b
//     }
// }
//
// const foo1 = foo(10)
//
// console.log(foo1())


//=============================Задача 1==================================
// function Counter() {
//   let count = 0;
//
//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }
//
// let counter = new Counter();
//
// console.log( counter.up() ); // ?      // 1
// console.log( counter.up() ); // ?      // 2
// console.log( counter.down()); // ?    // 1


// ======================  Счетчик ==============
// !!!----------------------------------------------------!!!
// 1: globalLE {} --> null

// const name = 'Alex'                             //2: globalLE {name: 'Alex'} --> null
//
// const func1 = () => {                           //3: globalLE {name: 'Alex', func1: Function} --> null
//                                                 //3': [[Environments]] --> globalLe
//     //5: func1LE: {func2: Function}
//     const hello = 'Hello'                       //6: func1LE: {hello: 'Hello, func2: Function}
//     console.log(hello + ' ' + name)             //7: func1LE: {hello: 'Hello, func2: Function} => Hello Alex
//
//     function func2(age) {
//                                                 //5': [[Environments]] --> func1LE
//                                                 //9:  func2LE: {age: 23}
//         console.log(`${hello} ${name} ${age}`)  //10: func2LE: {age: 23}



// // 1: globalLE {} --> null
//
// const counter = () => {             // 2: globalLE {counter: Function} --> null
//                                     //2' : [[Environments]] --> globalLe
//                                     //4: counter1LE: {}
//     let count = 0                   //5: counter1LE: {count: 0}
//
//     return () => {
//                                     //6' : [[Environments]] --> counter1LE
//         console.log(++count)
//     }
// }
//
// const counter1 = counter()        //3 : globalLE {counter: Function, counter1: Function} --> null
//
//
// counter1()
// counter1()
// counter1()




// 1: globalLE {} --> null

// const counter = () => {             // 2: globalLE {counter: Function} --> null
//                                     //2' : [[Environments]] --> globalLe
//     //5: counter1LE: {}
//     //6: counter2LE: {}
//     let count = 0                   //6: counter1LE: {count: 0}  //6: counter2LE: {count: 0}
//
//     return () => {
//         //7' : [[Environments]] --> counter1LE
//         //8' : [[Environments]] --> counter2LE
//         console.log(++count)
//     }
// }
//
// const counter1 = counter()        //3 : globalLE {counter: Function, counter1: Function} --> null
// const counter2 = counter()        //4 : globalLE {counter: Function, counter1: Function, counter2: Function} --> null
//
// counter1()
// counter1()
// counter1()
//
// counter2()
// counter2()
// counter2()











//=============================Задача 2*** ==================================
// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//     }
//     let message = Count is ${count};
//     function  log() {
//         // let message = Count is ${count};
//         console.log(message)
//     }
//
//     return [increment, log];
// }
//
//
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();