// Объекты
/*
Создай объект developer с свойствами:
1. name -> 'Alex'
2. age -> 24
3. isMan -> true
4. метод sayHi
 */
const jsFeature = 'jsFeature'
const jsFeature1 = 'jsFeature1'

const developer = {
    name: 'Alex',
    age: 24,
    isMan: true,
    // sayHi(a, name) {
    //     return a + name
    // }
    jsFeature
}

const newUser = (name, age) => {
    return {
        name,
        age
    }
}

// console.log(newUser('Vitalya', 29))


// const developer1 = new Object({
//     name: 'Alex',
//     age: 24,
//     isMan: true,
//     sayHi() {
//         console.log('Привет')
//     }
// })





/* Базовые операции с объектами:
    1. Достучись до свойств -> name, age, isMan, sayHi()
    2. Создай новое свойство -> city с значением New York
    3. Измени свойство age на значение -> 25
    4. Удали свойство -> isMan
    5. Добавь ключ -> 'secret-key' с значением 'any text'
    6. Создай новое свойство в объекте -> jsFeature с значением 'jsFeature',
    подумай как сделать это эффективнее
    const jsFeature = 'jsFeature'
 */

// console.log(developer["name"])
// console.log(developer["age"])
// console.log(developer["isMan"])

developer.city = 'New York'
developer.age = 25
delete developer.isMan

developer[jsFeature1] = jsFeature1


developer['secret-key'] = 'any text'
// console.log(developer)




// сравнение объектов
//1.
const a = {}
const b = {}

// console.log(a === b)

//2.
let c = {}
c = a;

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
// console.log(user3.name)                 // Viktor
// console.log(user1.name)                 // Anton
// console.log(user3.name === user1.name)  // false



// const user4 = {...user1}
// user4.name = 'Alex'
// console.log(user4.name)                 // Alex
// console.log(user1.name)                 // Anton
// console.log(user4.name === user1.name)  // false


// user1.age = 30
// console.log(user3.age)
// console.log(user1.age)
// console.log(user3.age === user1.age)


// user3.address.country = 'Germany'
// console.log(user3.address.country)     // Germany
// console.log(user1.address.country)     // Germany
// console.log(user3.address.country === user1.address.country)  // true



// ---------------------------------------------------------

/*
Способы клонирования объекта?
1. spread   (...)       // неглубокая  !!!
2. Object.assign()        // неглубокая  ООП

3. JSON.stringify и JSON.PARSE - глубокая копия
4. deepClone - lodash библиотека - глубокая копия
5. structuredClone - глубокая копия
 */

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


const userCopy = {...user} // неглубококое копирование
userCopy.age = 38
userCopy.preferences.theme = 'dark'

// console.log(user.age)                     // 30
// console.log(user.preferences.theme)       // 'dark'
//
// console.log(userCopy.age)                 // 38
// console.log(userCopy.preferences.theme)   // 'dark'

const userCopy2 = structuredClone(user)

// userCopy2.address.city = 'Manchester'
// console.log(user.address.city)                             // London
// console.log(userCopy2.address.city)                        // Manchester
// console.log(userCopy2.address.city === user.address.city)  // false
// console.log(userCopy2 === user)  // false

// console.log(userCopy.preferences.notifications.email)

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

// Object.keys()
// Object.values()
// Object.entries()

// Object.assign()
// Object.fromEntries()
// Object.freeze()

/*
1. С помощью какого метода можно достать все -> ключи в объекте?    -> что вернет?
2. С помощью какого метода можно достать все -> значение в объекте? -> что вернет?
3. Какой еще есть метод -> используй его                            -> что вернет?
 */

const keys = Object.keys(harryPotter)
const values = Object.values(harryPotter)
const entries = Object.entries(harryPotter)

// console.log(keys)
// console.log(values)
// console.log(entries)


// ------------------------------------------------------------------------------------------ //
const newUserDP = {
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

// const city = user.address.city
// const country = user.address.country


/*Способы еще достучаться до свойств объекта?
1. Используя ДП достучись до свойств объекта -> name, age, address, preferences
2. Используя ДП достучись до свойств объекта -> name, age , а все остальные помести в переменную -> ? ...rest
3. Используя ДП достучись до свойств объекта -> latitude, longitude, email, sms
4. Переименуй полученные свойства latitude и longitude -> lat, long
5. Используя ДП достучись до свойства объекта -> theme и задай значение по-умолчанию 'dark'
6. Создай функцию которая принимает объект -> user и достань свойства name, age поместив их в переменную,
а все остальные помести в другую переменную
 */

// const {name, age, address, preferences} = newUserDP
// const name = newUserDP.name
// const age = newUserDP.age
// const address = newUserDP.address
// const preferences = newUserDP.preferences

// console.log(name,age, address, preferences)

// const {name, age, ...restProps} = newUserDP
// console.log(restProps)
/*
const latitude1 = newUserDP.address.coordinates.latitude
const longitude1 = newUserDP.address.coordinates.longitude*/

// const {latitude, longitude} = newUserDP.address.coordinates
// console.log(latitude, longitude)

// const {email, sms} = newUserDP.preferences.notifications
// // console.log(email, sms)
//
// const {theme = 'dark'} = newUserDP.preferences

// console.log(theme)
// console.log(newUserDP)


// lat, long
// const {latitude, longitude} = newUserDP.address.coordinates
// const {latitude: lat, longitude: long} = newUserDP.address.coordinates
// console.log(lat, long)
// console.log(newUserDP)

// 6. Создай функцию которая принимает объект -> user и достань свойства name,
// age поместив их в переменную,
// а все остальные помести в другую переменную

const getValues = (obj) => {
    const {name, age, ...rest} = obj
    const {latitude, longitude} = obj.address.coordinates

    return name, age, rest, latitude, longitude
}

// const getValues = ({name, age, ...rest}) => {
//     return name, age, rest
// }
//
console.log(getValues(newUserDP))


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