// Объекты
/*
Создай объект developer с свойствами:
1. name -> 'Alex'
2. age -> 24
3. isMan -> true
4. метод sayHi
 */

// const developer





/* Базовые операции с объектами:
    1. Достучись до свойств -> name, age, isMan, sayHi()
    2. Создай новое свойство -> city с значением New York
    3. Измени свойство age на значение -> 25
    4. Удали свойство -> isMan
    5. Добавь ключ -> 'secret-key' с значением 'any text'
    6. Создай новое свойство в объекте -> jsFeature с значением 'jsFeature', подумай как сделать это эффективнее
    const jsFeature = 'jsFeature'
 */



// сравнение объектов
//1.
const a = {}
const b = {}

// console.log(a === b)


//2.
let c = a;

// console.log(a === c);

//3.

const user1 = {
    name: 'Anton',
    age: 26,
    isMan: true,
    address: {
        country: 'France',
        city: 'Paris'
    }
}

const user2 = {
    name: 'Anton',
    age: 26,
    isMan: true,
    address: {
        country: 'France',
        city: 'Paris'
    }
}

// console.log(user1 === user2)
// console.log(user1.name === user2.name)


//4.
const user3 = user1

// user3.name = 'Viktor'
// console.log(user3.name)
// console.log(user1.name)
// console.log(user3.name === user1.name)


// user1.age = 30
// console.log(user3.age)
// console.log(user1.age)
// console.log(user3.age === user1.age)


// user3.address.country = 'Germany'
// console.log(user3.address.country)
// console.log(user1.address.country)
// console.log(user3.address.country === user1.address.country)


// Методы объектов

const harryPotter = {
    name: 'Харри Поттер',
    gender: 'Мужской',
    age: 17,
    appearance: 'Черноволосый с мехом метлах и зелеными глазами',
    specialTraits: 'На лбу шрам в форме молнии',
    clothing: 'Черная мантия с капюшоном, рубашка, галстук и мантия Гриффиндорской школы чародейства и волшебства',
    accessories: ['Волшебная палочка', 'Золотой кубок для квиддича'],
    personality: ['Храбрый', 'Дружелюбный', 'Умный'],
    goal: 'Победить Волан-де-Морта и защитить волшебный мир'
};

/*
1. С помощью какого метода можно достать все -> ключи в объекте?    -> что вернет?
2. С помощью какого метода можно достать все -> значение в объекте? -> что вернет?
3. Какой еще есть метод -> используй его                            -> что вернет?
 */


// ------------------------------------------------------------------------------------------ //

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'London',
        country: 'UK',
        coordinates: {
            latitude: 51.5074,
            longitude: -0.1278
        }
    },
    preferences: {
        theme: 'light',
        fontSize: 14,
        notifications: {
            email: true,
            sms: false
        }
    }
};

/*Способы еще достучаться до свойств объекта?
1. Используя ДП достучись до свойств объекта -> name, age, address, preferences
2. Используя ДП достучись до свойств объекта -> name, age , а все остальные помести в переменную -> ?
2. Используя ДП достучись до свойств объекта -> latitude, longitude, email, sms
3. Переименуй полученные свойства latitude и longitude -> lat, long
4. Используя ДП достучись до свойства объекта -> theme и задай значение по-умолчанию 'dark'
6. Создай функцию которая принимает объект -> user и достань свойства name, age поместив их в переменную,
а все остальные помести в другую переменную
 */



// ---------------------------------------------------------

/*
Способы клонирования объекта?

 */










// const userCopy
// userCopy.age = 38
// userCopy.preferences.theme = 'dark'

// console.log(user.age)
// console.log(user.preferences.theme)


// ---------------------------------------------------------------------

// Задачи

const harryPotterCharacters = {
    harryPotter: {
        name: 'Harry Potter',
        age: 17,
        house: 'Gryffindor',
        pet: {
            name: 'Hedwig',
            type: 'Owl',
            color: 'White'
        }
    },
    hermioneGranger: {
        name: 'Hermione Granger',
        age: 17,
        house: 'Gryffindor',
        pet: {
            name: 'Crookshanks',
            type: 'Cat',
            color: 'Ginger'
        }
    },
    ronWeasley: {
        name: 'Ron Weasley',
        age: 17,
        house: 'Gryffindor',
        pet: {
            name: 'Scabbers',
            type: 'Rat',
            color: 'Gray'
        }
    },
    dracoMalfoy: {
        name: 'Draco Malfoy',
        age: 17,
        house: 'Slytherin',
        pet: {
            name: 'Astronomy',
            type: 'Snake',
            color: 'Green'
        }
    }
};

/*
1. Получить список персонажей из "Гарри Поттера" и их дома -> результат вывести в формате имя-дом:

2. Получить список имен персонажей из "Гарри Поттера" с их возрастом:

// На подумать
**3. Получить список имен питомцев персонажей из "Гарри Поттера":

 */