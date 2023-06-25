//============================== Лексическое окружение - LE (Lexical Environment) ================================
// Что такое лексическое окружение?
/*
LE (Lexical Environment)
Это скрытый (невидимый) объект, который есть у любого блока, скрипта или функции в JS



Внутри он содержит:
 - объект -> environmentsRecords
 - ссылку -> outerLe

 Или это объект:
 - объект с переменными в текущей области видимости
 - ссылка на родительское (внешнее лексическое окружение)

 lexicalEnvironment = {
    переменные: {
         в текущей области видимости
    },
    ссылка: --> на внешнее лексическое окружение
 }

Переменная – это свойство специального внутреннего объекта,
связанного с текущим выполняющимся блоком/функцией/скриптом.
Работа с переменными – это на самом деле работа со свойствами этого объекта.
 */

const lE = {
    environmentsRecords: {},
    outerLe: null
}

const lE1 = {
    environmentsRecords: {},
    outerLe: lE
}

// { } -->


// Для чего именно формируется этот объект?
/*
Функций, блоки кода (в циклах, условиях -> усы)

!!! Исключение объект -> он не создает scope (не формирует лексическое окружение)

Работа с переменными это работа с внутренним объектом лексического окружения (LE)
Когда мы создаем переменную и меняем ее, то на самом деле мы меняем ключ этого объекта
 */


//============================== Глобальный scope (globalLE) ==========================================
// Глобальный scope (globalLE)
// globalLE -> { } -> null

// let name;             // globalLE -> {name: undefined }
//
// name = 'Zeus'         // globalLE -> {name: "Zeus" }
// console.log(name)     // возвращается ключ объекта LE
//
// name = 'Thor'        // globalLE -> {name: "Thor" }
// console.log(name)    // возвращается ключ объекта LE


//============================== Scope в блоках кода ==========================================
/*
   Создается свой блок лексического окружения {} --> globalLE
   Всегда указывает на globalLE, внутри if он свой
 */


//============================== Scope в функциях ==========================================

// Отличие function declaration от function expression?
// globalLE -> { foo: Function} -> null
/*
Эта функция сидит там на момент запуска скрипта -> там есть этот ключ
 */

// foo()
//
// function foo() {
//     console.log('foo')
// }
//
//
// const bar = function () { // globalLE -> {foo: Function, bar: Function} -> null
//     console.log('foo')
// }


//============================== [[Environment]] ==========================================
// globalLE -> { foo: Function} -> null


// const foo = () => {
//     // [[Environment]] --> globalLE
//     // fooLE {} -> globalLE
//     console.log()
// }

/*
При создании функции в них идет пометка [[Environment]]
и создается ссылка на внешний scope -> globalLE
globalLE это ссылка, которая указывает на объект

[[Environment]] - нужна чтобы получить ссылку на внешний scope
 */

// foo()
/*
В момент вызова функции foo (как только она вызывается) -> внутри нее создается
(формируется) свой собственный объект лексического окружения
fooLE {} -> globalLE  (ссылка globalLE копируется из переменной [[Environment]])

Как только функция выполняет свою работу, этот объект -> fooLE -> удаляется
 */


//============================== Пример 1 ==========================================

// !!!----------------------------------------------------!!!
// const name = 'Alex'
//
// const foo = () => {
//     const hello = 'Hello'
//     console.log(hello + ' ' + name)
// }
// !!!----------------------------------------------------!!!

//  globalLE -> { name: 'Alex', foo: Function} -> null

// const name = 'Alex'  // globalLE -> { name: 'Alex'} -> null
//
// const foo = () => {          // globalLE -> { name: 'Alex', foo: Function} -> null
//     // [[Environment]] --> globalLE
//     // fooLE {} -> globalLE            ->> fooLE {hello = 'Hello'} -> globalLE
//     const hello = 'Hello'
//     console.log(hello + ' ' + name)
// }


/*
Алгоритм работы:
1. Изначально у нас есть globalLE -> {} -> null
2. Затем добавляется переменная name на 109 строке в globalLE -> {name: 'Alex'} -> null
3. Затем добавляется функция foo на 111 строке в globalLE -> {name: 'Alex', foo: Function} -> null
4. Затем в функции создается переменная [[Environment]], которая ссылается на глобальный scope -> globalLE
Внутрь функции мы не лезем, т.к. не вызвали ее
5. В момент вызова функции создается ее собственный объект лексического окружения fooLE
// fooLE {} -> globalLE , который ссылается на globalLE
6. Затем добавляется переменная hello на 114 строке в fooLE -> {hello: 'Hello'} -> globalLE
7. Движку теперь нужно понять где взять hello -> ищет в локальной области видимости -> находит
8. Движку теперь нужно понять где взять name -> ищет в локальной области видимости -> не находит ->
-> начинает искать в объекте fooLE {hello: 'Hello'} и там такого свойства нету ->
-> идет по ссылке globalLE, которая указывает на объект глобального scope globalLE -> { name: 'Alex', foo: Function} -> null
-> находит и подставляет

По сути алгоритм такой, что у нас движок идет по объектам (по ссылкам) и ищет что-то, вконце если ничего нету то null
 */


//============================== Пример 2 ==========================================

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
// !!!----------------------------------------------------!!!


//  globalLE -> {} -> null

// const name = 'Den'                              // globalLE -> {name: "Den"} -> null
//
// const func1 = () => {                           // globalLE -> {name: "Den", foo: Function} -> null
//     // [[Environment]] --> globalLE
//     // func1Le {} -> globalLE
//     const hello = 'Hello'                       // func1 {hello: 'Hello', func2: Function} -> globalLE
//     console.log(hello + ' ' + name)
//
//     function func2(age) {
//         // [[Environment]] --> func1
//         // func2Le {} -> func1Le
//         console.log(`${hello} ${name} ${age}`)
//     }
//
//     func2(35)
// }
//
// func1()


/*
Алгоритм работы:
1. Изначально у нас есть globalLE -> {} -> null
2. Затем добавляется переменная name на 168 строке в globalLE -> {name: "Den"} -> null
3. Затем добавляется функция foo на 170 строке в globalLE -> {name: "Den", foo: Function} -> null
4. Затем в функции создается переменная [[Environment]], которая ссылается на глобальный scope -> globalLE
Внутрь функции мы не лезем, т.к. не вызвали ее
5. В момент вызова функции func1 создается ее собственный объект лексического окружения func1Le
// func1 {} -> globalLE , который ссылается на globalLE
6. Затем добавляется переменная hello на 173 строке в func1Le -> {hello: 'Hello', func2: Function} -> globalLE
7. func2 добавляется т.к. это function declaration и поэтому в функции создается переменная
[[Environment]], которая ссылается на func1Le (177 строка)
8. В момент вызова функции func2 создается ее собственный объект лексического окружения func2Le
// func2Le {} -> func1Le , который ссылается на func1Le

Также в этот объект попадут параметры функции -> func2Le {age: 35}

9. Движку теперь нужно понять где взять hello -> ищет в локальной области видимости -> не находит ->
-> начинает искать по ссылке в объекте func1Le {hello: 'Hello'} и там находит

По сути алгоритм такой, что у нас движок идет по объектам (по ссылкам) и ищет что-то, вконце если ничего нету то null
 */


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


//============================== Пример 4 ==========================================
// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         alert(${phrase}, ${user});
//     }
// }
//
// sayHi();

//=============================Замыкание (Closures)==================================
// Замыкание - способность функции запоминать тот объект лексического окружения, в котором она создана


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
//  globalLE -> {} -> null


// const counterCreator = () => {  // globalLE -> {counterCreator: Function} -> null
//     // [[Environment]] --> globalLE
//     //counterCreatorLE {count: 0}
//    let count = 0
//
//     return () => {
//         // [[Environment]] --> counterCreatorLE
//         // { } --> counterCreatorLE
//         console.log(++count)
//     }
// }
//
// const counter = counterCreator()
// counter()
// counter()
// counter()

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

const counterCreator = () => {
    // counter1LE {count: 0}
    // counter2LE {count: 0}
    let count = 0

    return () => {
        // [[Environment]] --> counter1LE
        // [[Environment]] --> counter2LE
        console.log(++count)
    }
}

const counter1 = counterCreator()
const counter2 = counterCreator()

counter1()
counter2()
counter1()
counter2()




//=============================!!!Задачи с собесов!!!==================================










//=============================!!!Доп задачи!!!==================================

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
// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?




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


