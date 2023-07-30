//============================== Классы ================================

//============================== Введение ================================
// Что такое ООП?

// Способы создания объектов в ООП
// функция-конструктор и класса


//============================== Создание объектов с помощью функции-конструктора =========
/*
Создайте объект Animal с помощью функции-конструктора у которого будет свойство name
и метод getPetName, который получает имя животного.
Создайте 2ух животных : cat и dog

Вывести в консоль созданные объекты, имена животных путем обращения к свойству name
и путем вызова метода getPetName
 */

// function Animal(name) {
//     this.name = name
// }
//
// Animal.prototype.getPetName = function() {
//     return this.name
// }
//
// const cat = new Animal('кот')
// const dog = new Animal('собака')
//
// console.log(cat)
// console.log(cat.getPetName())
// console.log(dog.getPetName())


//============================== Создание объектов с помощью класса =========
// Как создать класс и какие основные блоки у него есть?
// class MyClassName {
//     constructor() {
//     }
//
//     anyMethod() {
//
//     }
// }


// Что такое конструктор и для чего он нужен?



// Как работают классы под капотом?


// Чему равен typeof класса?

// console.log(typeof MyClassName)   // function



// Как создать свойство в классе?
//
// class MyClassName {
//     constructor(name) {
//         this.name = name
//     }
//
//     anyMethod() {
//         console.log(this.name)
//     }
// }
//
//
// // Как вызывать созданный класс?
//
// const vitalya = new MyClassName('vitalya')
//
// console.log(vitalya)
// vitalya.anyMethod()


// Перепиши пример выше с помощью класса

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//
//     getPetName() {
//         return this.name
//     }
// }
//
// const cat = new Animal('кот')
// const dog = new Animal('собака')
//
// console.log(cat)
// console.log(cat.getPetName())
// console.log(dog.getPetName())

//============================== Принципы ООП ======================================

// Какие есть принципы ООП?
// Инкапсуляция (incapsulation)
// Полиморфизм (polymorphism)
// Абстракция (abstraction)
// Наследование (inheritance)

//============================== Наследование ======================================
/*
Создайте класс Human с помощью класса у которого будут свойства name и age
и метод sayHello (`Всем привет меня зовут ИМЯ__ЧЕЛОВЕКА, мне ВОЗРАСТ__ЧЕЛОВЕКА`
Создайте человека (объект) используя класс

Вывести в консоль созданный объект, а также пусть он поприветствует всех
 */


// class Human {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//
//     sayHello() {
//         console.log(`Всем привет меня зовут ${this.name}, мне ${this.age}`)
//     }
// }
//
// const person = new Human('vitali', 29)
// console.log(person)
// person.sayHello()


//============================== Ключевое слово super ======================================

// Для чего нужно ключевое слово super?

// super в constructor

// Что будет если не написать super?

// super для переопределения методов

// переопределение constructor

// переопределение метода


/* Создайте новый класс Programmer наследуясь от класса Human, со свойствами родителя
и добавьте собственное свойство webDevelopmentSkills
Создайте программиста (объект) используя класс

Вывести в консоль созданный объект, выведите webDevelopmentSkills,
а также пусть он поприветствует всех

Попробуйте добавить sayHello в класс Programmer и посмотрите что будет

Добавьте метод showMyProgrammingSkills, который выводит:
`Мой текущий стек ТЕКУЩИЙ_СТЕК_ОБЪЕКТА`

Добавьте метод startCoding, который выводит:
'Я пошел кодить'
 */


// class Human {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//
//     sayHello() {
//         return (`Всем привет меня зовут ${this.name}, мне ${this.age}`)
//     }
// }
//
// const person = new Human('vitali', 29)
// console.log(person)
// person.sayHello()
//
// class Programmer extends Human {
//     constructor(name, age, isProgrammer) {
//        super(name, age)
//         this.isProgrammer = isProgrammer
//     }
//
//     // sayHello() {
//     //     console.log('Programmer sayHello')
//     // }
//
//     sayHelloProgrammer() {
//         return super.sayHello() + ', я программист'
//     }
// }
//
// const programmer = new Programmer('ilya', '23', true)
// console.log(programmer)
//
// programmer.sayHello()
// console.log(programmer.sayHelloProgrammer())
//
// class MyClass {
//
// }


// Как проверить принадлежит ли наш класс Programmer классу Human?

// console.log(programmer instanceof Programmer)
// console.log(programmer instanceof MyClass)

// console.log(programmer instanceof Object)
// console.log(programmer instanceof Human)




//============================== Инкапсуляция ======================================


/* Создайте новый класс Developer со свойствами name и programmingLanguage.
Создайте методы: startCoding и printProgrammingLanguage, которые выводят:
`ИМЯ_РАЗРАБОТЧИКА начинает писать код`
`Язык программирования: ЯЗЫК_ПРОГРАММИРОВАНИЯ`

Создайте девелопера (объект) используя класс

Вывести в консоль все
 */

// class Developer {
//     #salary
//
//     constructor(name, programmingLanguage) {
//         this.name = name
//         this.programmingLanguage = programmingLanguage
//         this.#salary = 1000
//     }
//
//     #anyMethod() {
//         return 100
//     }
//     startCoding() {
//         console.log(`${this.name} начинает писать код`)
//     }
//     printProgrammingLanguage(){
//         console.log(`Язык программирования: ${this.programmingLanguage}`)
//     }
//     showSalary() {
//         return this.#salary + this.#anyMethod()
//     }
// }
//
// const developer1 = new Developer('Кирилл', 'python')
// console.log(developer1.showSalary())
//
// // console.log(developer1.#anyMethod())
// // developer1.startCoding()
// // developer1.printProgrammingLanguage()
//
// class JuniorDeveloper extends Developer {
//     constructor(name, programmingLanguage, webDevelopmentSkills) {
//         super(name, programmingLanguage);
//         this.webDevelopmentSkills = webDevelopmentSkills
//     }
// }
//
// const junior1 = new JuniorDeveloper('Airat', 'pascal', ['OOP', 'React', 'VB'])
//
// // console.log(junior1.#salary)
// junior1.startCoding()
// junior1.printProgrammingLanguage()



/*
Создайте новый класс JuniorDeveloper наследуясь от класса Developer, со свойствами родителя
и добавьте собственное свойство webDevelopmentSkills
Создайте программиста (объект) используя класс

Вывести в консоль созданный объект, выведите webDevelopmentSkills,
а также пусть он поприветствует всех

Попробуйте добавить sayHello в класс Programmer и посмотрите что будет

Добавьте метод showMyProgrammingSkills, который выводит:
`Мой текущий стек ТЕКУЩИЙ_СТЕК_ОБЪЕКТА`

Добавьте метод startCoding, который выводит:
'Я пошел кодить'
 */



//============================== Публичные свойства и методы (public) ======================================
// Что такое публичные свойства и методы (public)


//============================== Приватные свойства и методы (private # ======================================

// Что такое приватные свойства и методы (private #)


// Но иногда нам нужно получать доступ к приватным полям, а также их изменять


//============================== Геттеры/Сеттеры ======================================
// Что такое геттеры и сеттеры?

// class Developer {
//     #salary
//
//     constructor(name, programmingLanguage) {
//         this.name = name
//         this.programmingLanguage = programmingLanguage
//         this.#salary = 1000
//     }
//
//     #startCoding() {
//         return (`${this.name} начинает писать код`)
//     }
//     printProgrammingLanguage(){
//         console.log(`Язык программирования: ${this.programmingLanguage}`)
//     }
//
//     // get salary() {
//     //     return this.#startCoding()
//     // }
//
//     get salary() {
//         console.log('Отрабатывает геттер')
//         return this.#salary
//     }
//
//     set salary(salary) {
//         console.log('Отрабатывает сеттер')
//         if (salary < 400) {
//             this.#salary = 'Я иду на другой собес'
//             return
//         }
//         this.#salary = salary
//     }
// }
//
// const developer1 = new Developer('Кирилл', 'python')
//
// console.log(developer1.salary)
//  developer1.salary = 100
// console.log(developer1.salary)


// console.log(developer1.showSalary())
//
// console.log(developer1.#anyMethod())
// developer1.startCoding()
// developer1.printProgrammingLanguage()

// class JuniorDeveloper extends Developer {
//     constructor(name, programmingLanguage, webDevelopmentSkills) {
//         super(name, programmingLanguage);
//         this.webDevelopmentSkills = webDevelopmentSkills
//     }
// }
//
// const junior1 = new JuniorDeveloper('Airat', 'pascal', ['OOP', 'React', 'VB'])

// console.log(junior1.salary)





//============================== Полиморфизм ======================================
// Что такое Полиморфизм?

// class Figure {
//     constructor() {
//
//     }
//
//     calculateArea() {}
// }
//
// class Circle extends Figure {
//     constructor() {
//         super();
//     }
//
//     calculateArea() {
//         return 'Площадь круга'
//     }
// }
//
// class Rectangle extends Figure {
//     constructor() {
//         super();
//     }
//
//     calculateArea() {
//         return 'Площадь треугольника'
//     }
// }
//
// class Square extends Figure {
//     constructor() {
//         super();
//     }
//
//     calculateArea() {
//         return 'Площадь квадрата'
//     }
// }
//
// const circle = new Circle()
// const rectangle = new Rectangle()
// const square = new Square()
//
//
// const arr = [circle, rectangle, square]
// arr.forEach((el) => {
//     console.log(el.calculateArea())
// })


//============================== Абстракция ======================================
// Что такое Абстракция?




//============================== Статические свойства и методы (static) ======================================

// Что такое статическое свойства или метод и как его создать

// class Developer {
//     // age = 15             // публичное public       -> наследуется
//     // _age = 10            // защищенное protected   -> наследуется
//     // #age = 20            // приватное private      -> не наследуется
//     // static age = 30      // статическое static     -> наследуется
//
//     constructor(name, programmingLanguage) {
//         this.name = name
//         this.programmingLanguage = programmingLanguage
//     }
//
//     static printProgrammingLanguage(){
//         console.log(`Язык программирования: ${this.programmingLanguage}`)
//     }
// }
//
// const developer1 = new Developer('Кирилл', 'python')
//
// class JuniorDeveloper extends Developer {
//     constructor(name, programmingLanguage) {
//         super(name, programmingLanguage);
//     }
// }
//
// const junior1 = new JuniorDeveloper('vasya', 'pascal')
//
// console.log(JuniorDeveloper.printProgrammingLanguage())
// // console.log(JuniorDeveloper.age)


// пример использования static для задания начальных значений


// class Developer {
//     static isDeveloper(developer) {
//         return developer instanceof Developer
//     }
//
//     static initialParams = {
//         name: 'Kirill',
//         programmingLanguage: 'Python',
//     }
//
//     constructor(name, programmingLanguage) {
//         this.name = name || Developer.initialParams.name
//         this.programmingLanguage = programmingLanguage || Developer.initialParams.programmingLanguage
//     }
//
//     printProgrammingLanguage(){
//         console.log(`Язык программирования: ${this.programmingLanguage}`)
//     }
// }
//
// // const developer1 = new Developer('vitalya', 'js')
// const developer2 = new Developer()
// console.log(developer2)
//
// Developer.initialParams.name = 'vasya'
// const developer3 = new Developer()
// console.log(developer3)

// const isDeveloper = Developer.isDeveloper(developer1)
//
// console.log(isDeveloper)






//============================== Примеси ======================================

// Для чего придумали примеси? Как реализовать?

// class Developer {
//     constructor(name, programmingLanguage) {
//         this.name = name
//         this.programmingLanguage = programmingLanguage
//     }
//
//     printProgrammingLanguage(){
//         console.log(`Язык программирования: ${this.programmingLanguage}`)
//     }
// }
//
//
// const react = {
//     technology: 'react',
//     render() {
//         return('рисую разметку')
//     }
// }
//
// const angular = {
//     stack: 'angular',
// }
//
// const python = {
//     programmingLanguage: 'python',
//     ml() {
//         return ('создаю ИИ')
//     }
// }
//
// Object.assign(Developer.prototype, react, angular, python)
// const developer1 = new Developer('vitalya', 'js')
//
// console.log(developer1.programmingLanguage)
// console.log(developer1.ml())
// console.log(developer1.render())