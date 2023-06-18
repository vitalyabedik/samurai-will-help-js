//=============================Прототипы==================================

//             ЧТОЗА.__proto__            ЧТОЗА.prototype


//=============================__proto__==================================
// Для чего нужны прототипы?
// Наследование



// Как наследовать свойства из одного объекта в другой?

const student = {
    name: 'Vitalya',
    age: 30
    // __proto__: {} new Object()
}


const mentor = {
    isMentor: true
}

mentor.__proto__ = student

// console.log(mentor.__proto__ = student1)

// console.log(student instanceof Object)

// console.log(mentor)
// console.log(mentor.__proto__.name)
// console.log(mentor.name)
// console.log(mentor.age)


// Object.create(), Object.hasOwnProperty()
// const mentor1 = Object.create(student)
// const mentor2 = Object.create(student, {
//     isMentor: {
//         value: true,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });
// console.log(mentor1.name)
// console.log(mentor2)


// Чем может быть равен __proto__?
// Равно объекту либо null



// У кого есть __proto__?
// есть у всех объектов

// const number = new Number()
// const string = new String()
// const obj = new Object()
// const array = new Array()
// const array = new Function()
// const date = new Date()

const man1 = {}  // new Object()
const man2 = {}  // new Object()

const a1 = 1

// console.log(man1.__proto__)
// console.log(a1.__proto__)


//=============================prototype==================================
// функции-конструкторы в JS встроенные какие знаете?  ++


// function Car(brand) {
//     this.brand = brand
// }
//
// const isPremiumCar = {
//     isPremium: true,
//     getBrand() {
//         return this.brand
//     }
// }
//
// Car.prototype = isPremiumCar
//
// const bmw = new Car('bmw')

// console.log(bmw.isPremium)
// console.log(bmw.getBrand())


// У кого есть свойство prototype?
// __proto__ у всех объектов
// prototype у всех функций и классов


// Какая связь между __proto__ и prototype?



// Посмотри с помощью чего созданы все типы данных



// Смотрим прототипы и их цепочку



//=============================Прототипы для функции-конструктора==================================
// Написать функцию конструктор



// Задание свойства в прототип для функции-конструктора
function Car(brand) {
    this.brand = brand
}
Car.prototype.sayHi = function () {
    return 'Привет'
}

Car.prototype.incubator = 100200

const bmw = new Car('bmw')
//
// console.log(bmw.incubator)
//
// console.log(bmw.__proto__)


// Задание метода в прототип для функции-конструктора

// console.log(bmw.sayHi())
// Как работает this для прототипов?

Number.prototype.anyMethod = function () {
    return 'anyMethod'
}

String.prototype.customRepeat = function (str) {
    return this + str
}

// console.log((1).anyMethod())
// console.log('12431234'.customRepeat('samurai'))
// console.log('incub'.customRepeat('samurai'))


//=============================Создание своих методов для примитивов================================
// Откуда у примитивов взялись методы?
// Расскажи на примере (1).toString()

// console.log((1).toString())



// Создай метод superSamurai для строки, который будет добавлять строку,
// переданную в качестве параметра в нашу функцию к нашей текущей строке



// Попробуй применить его к любой строке



// Создай свойство samuraiCount для чисел, которое должно равняться 100200



// Попробуй переопределить свойство length для строки и посмотри получилось ли



// Докажи что в JS все это объект



// =============== Задание по прототипам ========================================

/*
1. Создай функцию-конструктор Animal, внутри нее напиши console.log('Наш зверь')
2. С помощью функции-конструктора Animal создай экземпляр monkey
3. Посмотри что будет если создавать экземпляр без ключевого слова
4. Посмотри что будет если к monkey применить метод constructor
5. Посмотри что будет если взять instanceof monkey от Animal

6. Создай новые свойства для Animal: type, arial, isDangerous, energy
7. Создай экземпляр monkey и lion c этими свойствами и проверь вышло
8. Создай метод run внутри Animal, в котором будет проверяться свойство energy,
если energy больше нуля, то она будет уменьшаться на 20,
иначе выведи в консоль -> Пощади зверя!
9. Проверь экземпляры на наличие методов и их работу

10. Равны ли между собой методы для monkey и lion?
А теперь сравни метод map для любых двух массивов arr1.map === arr2.map и сделай вывод
11. Добавь метод run в prototype (и убери старый из Animal)
12. Попробуй вызвать данный метод для каждого из экземпляров
и посмотри в браузере что у нас за экземпляры
Поясни откуда у них взялся данный метод
13. Добавь с помощью prototype новое свойство hungry = 60% в Animal (вне его)
и такое же свойство внутри Animal hungry = 10%
и попробуй вывести данное свойство в консоль, сначала когда они оба есть и когда есть свойство
только вне функции (с помощью prototype)
Объясни как это работает?
14. Создай еще один метод в prototype -> getEnergyInfo и выведи в консоль текущий уровень энергии -> '(число)'
Создай ниже такой же метод в prototype ->
getEnergyInfo и выведи в консоль -> 'Текущий уровень энергии (число)'
Посмотри что будет

Объясни как это работает и что это дает?
 */


// =============== Решение задачи по прототипам ========================================





//=============================JSON==================================

// Расшифруй аббревиатуру



// Для чего нужен JSON?



// Что попадает в JSON, а что нет?
/*
JSON поддерживает следующие типы данных:
- Объекты { ... }
- Массивы [ ... ]
- null

- Примитивы:
   * cтроки,
   * числа,
   * логические значения true/false,
 */

/*
JSON пропускает некоторые специфические свойства объектов JavaScript:
- Свойства-функции (методы).
- Символьные ключи и значения.
- Свойства, содержащие undefined.
 */



// Пример
const frontData = {
    name: 'Alex',
    login: 'alexandro',
    age: 25,
    isOnline: false,
    isAdmin: false,
    email: 'alex25@gmail.com',
    password: '12345',
    location: {
        country: 'Belarus',
        city: 'Vitebsk'
    }
}

// как из данного объекта сделать JSON?
const jsonFrontData = JSON.stringify(frontData)
// console.log(frontData)
// console.log(jsonFrontData)
//
// console.log(typeof frontData)
// console.log(typeof jsonFrontData)

// В чем отличие данных в JSON от обычного объекта?


// console.log(frontData)
// console.log(jsonFrontData)


// Как теперь серверу превратить этот JSON обратно в объект?

const jsonBackData = JSON.parse(jsonFrontData)
// console.log(jsonBackData)




//=============================try, catch, finally==================================

// Для чего нужна данная конструкция и когда используется?

// Нужно чтобы код работал дальше и программа не упала

// Базовая запись
// try {
//
// } catch(error) {
//
// } finally {
//
// }




// Как обработать ошибку?

// const a = 1
//
//     const b = a + c
// try {
//     console.log(b)
// } catch(error) {
//     console.log(error)
// }
//
// console.log('123')

// ==================================================

// const a = 1
//
// try {
//     console.log('Я в try')
//     const b = a + c
//     console.log(b)
//     console.log('Я все еще try')
// } catch(error) {
//     // console.log(error.name)
//     // console.log(error.message)
//     // console.log(error.stack)
//     console.log('Я в catch')
// } finally {
//     console.log('Я finally')
// }
//
// console.log('Я вне конструкции try catch')

//
// const a = 1
//
// try {
//     console.log('Я в try')
//     const b = a + c
//     console.log(b)
//     console.log('Я все еще try')
// } catch(error) {
//     // console.log(error.name)
//     // console.log(error.message)
//     // console.log(error.stack)
//     console.log('Я в catch')
// } finally {
//     console.log('Я finally')
// }
//
// console.log('Я вне конструкции try catch')



// Что делает блок try?

// const a = 1
//
// try {
//     const a1 = 10
//
//     const b1 = a1 + c1
//
//     try {
//         console.log('Я в try')
//         const b = a + c
//         console.log(b)
//         console.log('Я все еще try')
//     } catch ({name, message, stack}) {
//         console.log(name)
//         console.log(message)
//         console.log(stack)
//         console.log('Я в catch')
//     }
// } catch (e) {
//     console.log(e)
// }

// console.log('Я вне конструкции try catch')



// Что делает блок catch?



// Какие свойства содержит объект ошибки и что они означают?



// Как можно сократить здесь код?



// Что делает блок finally?


// try {
//     console.log('Запускаем крутилку')
//     console.log('Делаем запрос на сервер -> fetch/axios')
//     console.log('сетаем данные / диспатчим нашу санку')
// } catch (e) {
//     console.log('обрабатываем ошибку, например показываем popup')
// } finally {
//     console.log('Убираем крутилку')
// }



// Как создать пользовательскую ошибку?

// try {
//     console.log('Запускаем крутилку')
//     console.log('Делаем запрос на сервер -> fetch/axios')
//     console.log('сетаем данные / диспатчим нашу санку ???')
//     throw new Error('СВОЯ ОШИБКА КАСТОМНАЯ')
// } catch (e) {
//     console.log(e)
// } finally {
//     console.log('Убираем крутилку')
// }












