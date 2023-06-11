//=============================Метод объекта==================================

// 1. Метод объекта

// способы создания метода объекта

// const user = {
//     name: 'Zhenya',
//     age: 24,
//     // 1ый способ
//     sayHi() {
//         return `Привет всем, меня зовут ${user.name} !`
//     },
//     // 2ой способ
//     // sayHi: function() {
//     //     return 'Привет всем!'
//     // }
// }
//
// user.isMan = true

// 3ий способ
// user.sayHi = function () {
//     return 'Привет всем!'
// }

// 4ый способ
//  function sayHi () {
//     return 'Привет всем!'
// }
//
// user.sayHi = sayHi

// 5ый способ
// const sayHi = function () {
//     return 'Привет всем!'
// }
// user.sayHi = sayHi

// console.log(user)
// console.log(user.sayHi())


//=============================this==================================

// this - контекст вызова. Равен глобальному объекту

// Что это такое?
// this - это объект перед точкой, В МОМЕНТ ВЫЗОВА (важное замечание, на видео не договоррил)

// Какой тип данных?
// это зачастую объект

// Чему равен?
// console.log(this === global) - в Node.js -> global
// console.log(this === window) - в браузере -> window


// для чего это?
const user = {
    name: 'Zhenya',
    age: 24,
    sayHi() {
        return `Привет всем, меня зовут ${this.name} !`
    },
    getAge(inc1) {
        return `Мне ${this.age + inc1 } года`
    },
    getFullInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}`
    }
}

// console.log(user.sayHi())
// console.log(user.getAge())




// доказательство что это такое

const user1 = {
    name: 'Vitalya',
    age: 35,
}

const user2 = {
    name: 'Denis',
    age: 35,
}
//
// // console.log(this)
// user1.getUser = function () {
//     return this
// }
//
// // console.log(user.getUser())
// console.log(user1.getUser())


//=============================call, bind, apply==================================

// call, bind, apply


// что за методы?
// для чего нужны?
// что принимают в качестве параметров?

// call

// console.log(user.sayHi.call(user1))
// console.log(user1.sayHi())

// console.log(user.getAge.call(user1, 10, 15))
// console.log(user.getAge.apply(user1, [10]))

// console.log(user.getFullInfo())

// const userFullName = user.getFullInfo.bind(user1)
// const userFullName = user.getFullInfo.bind(user1)
// const userAge = user.getAge.bind(user1)

const userAge = user.getAge.bind(user1)
// console.log(userAge(10))

// console.log(user.getFullInfo.call(user1).call(user2))
// console.log(user.getFullInfo.bind(user1).call(user2))

// console.log(userAge(10))
// console.log(userFullName())
// console.log(user.getFullInfo.bind(user1)())


// apply


// bind


// Пример

const junior = {
    salary: 500,
    name: 'Ilya',
    workExp: 0
}

const teamLead = {
    salary: 5000,
    name: 'Denis',
    workExp: 7
}

function printDeveloperInfo(extraInfo = '') {
    console.log('this', this)

    return `Name: ${this.name}, 
    Salary: ${this.salary}, 
    Exp: ${this.workExp}, 
    extraInfo: ${extraInfo}
   `
}

// console.log(printDeveloperInfo())
// console.log(printDeveloperInfo.call(teamLead, 'Хватит душить'))
// console.log(printDeveloperInfo.call(junior, 'Хватит работать бесплатно'))

const getJuniorInfo = printDeveloperInfo.bind(junior, 'Хватит работать бесплатно')

// console.log(typeof getJuniorInfo)
// console.log(typeof printDeveloperInfo)
// console.log(getJuniorInfo())


//=============================Случаи потери контекста==================================

// 1ый - вызываем функцию без какого-либо контекста
const dev = {
    name: 'Nikita',
    programmingLanguage: 'Javascript',
    getName() {
        return this.name
    },
    getProgrammingLanguage() {
        return this.programmingLanguage
    }
}

const newGetName = dev.getName

console.log('getName', dev.getName())
console.log('newGetName', newGetName())


// const devGetName = newGetName.bind(dev)

// console.log('devGetName', devGetName())
// console.log('devGetName', dev.getName())

// 2ой - стрелочная функция

// const dev = {
//     name: 'Nikita',
//     programmingLanguage: 'Javascript',
//     // getName() {
//     //     setTimeout(function() {
//     //         console.log(this.name)
//     //     }, 100)
//     // },
//
//     getName: function() {
//           return () => console.log(this.name)
//     },
//     getProgrammingLanguage: () => {
//         console.log(this)
//         return this.programmingLanguage
//     }
// }
//
// // console.log(dev.getProgrammingLanguage())
// console.log(dev.getName()())


// const cat = {
//     type: 'british',
//     method1: () => this.type,
//     method2: function() {
//         const fn = () => this.type
//         return fn()
//     }
// }

// console.log(cat.method2())


// const arrow1 = () => {
//     console.log(this)
//     return this.type
// }
//
// const arrow2 = function() {
//     console.log(this)
//     return this.type
// }
//
// console.log(arrow1.call(cat))
// console.log(arrow2.call(cat))


//=============================Функция-конструктор==================================

// Функция-конструктор


// const person = {
//     name: 'Denis',
//     age: 24,
//     isMan: true
// }

// для чего нужна

// Правила при работе с функцией конструктор

// 1. Имя функции начинается с большой буквы
// 2. При ее вызове нужно использовать ключевое слово new

// Базовая запись

function Person(name, age, isMan = true, salary=100) {
    this.name = name
    this.age = age
    this.isMan = isMan
    this.salary = salary
}

// function person(name, age, isMan, obj) {
//     obj = {}
//     obj.name = name
//     obj.age = age
//     obj.isMan = isMan
//     return obj
// }

const person1 = new Person('Denis', 24, 200)
const person2 = new Person('Vitalya', 39, true, 200)
const person3 = new Person('Masha', 20, false, 200)
const person4 = new Person('Katya', 21, false, 200)

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)

// Разница по сравнению с обычной функцией (что возвращают)

// function car() {
//     return 123
// }
//
// function Car() {
//     return 123
// }
//
// const car1 = car()
// const car2 = new Car()
//
// console.log(car1)
// console.log(car2)


// Что делать, если нужно добавить свойство?



// ---------------------------------- Задачи -----------------------------------------------

/*
1. Создайте объект car, у которого есть свойство brand и метод getBrand,
который выводит название марки машины.
Вызовите метод getBrand как метод объекта car.

2. Создайте объект counter, у которого есть свойство count и методы increment, decrement и reset,
которые увеличивают, уменьшают, зануляют (сбрасывает) значение счетчика соответственно.
Используйте ключевое слово this для обращения к свойству count.

3. Создайте объект person, у которого есть свойства name и age.
Создайте метод greet, который выводит сообщение с именем и возрастом персоны.
Используйте метод bind для создания новой функции,
которая будет связывать значение this с объектом person.

4. Создайте объект calculator,
у которого есть свойства x и y и методы сложения
и умножения этих чисел.
Создайте другой объект user,
у которого есть свойства a и b.
Используйте метод call или apply
для вызова методов объекта calculator
с аргументами из объекта user.
 */


// 1
// const car = {
//     brand: 'BMW',
//     getBrand() {
//         return this.brand
//     }
// }
//
//
// console.log(car.getBrand())


// 2

// const counter = {
//     count: 0,
//     inc() {
//         return ++this.count
//     },
//     dec() {
//         return --this.count
//     },
//     reset() {
//         return this.count = 0
//     },
// }
//
// console.log(counter.inc())
// console.log(counter.inc())
// console.log(counter.inc())
// console.log(counter.inc())
// console.log(counter.count)
// console.log(counter.reset())


// 3

const person = {
    name: 'Vitalya',
    age: 20
}

function greet() {
    return `Name: ${this.name}, Age: ${this.age}`
}

const personGreet = greet.bind(person)
// console.log(personGreet())

// 4

const calculator = {
    x: 3,
    y: 5,
    sum(c) {
        return this.x + this.y + c
    },
    mul() {
        return this.x * this.y
    }
}

const man = {
    x: 10,
    y: 12,
}


console.log(calculator.sum.call(man, 100))