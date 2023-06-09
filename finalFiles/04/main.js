// ---------------------- Задачи на методы массивов  --------------------------- //

const characters = [
    {
        id: 1,
        name: 'Frodo Baggins',
        race: 'Hobbit',
        age: 51,
        home: 'Bag End',
        weapons: ['Sting', 'Mithril coat'],
        friends: [4, 5, 6],
    },
    {
        id: 2,
        name: 'Samwise Gamgee',
        race: 'Hobbit',
        age: 38,
        home: 'Hobbiton',
        weapons: ['Elven rope', 'Cooking skills'],
        friends: [1, 4, 5],
    },
    {
        id: 3,
        name: 'Gandalf',
        race: 'Maia',
        age: 'Unknown',
        home: 'Valinor',
        weapons: ['Staff', 'Sword Glamdring'],
        friends: [7, 8],
    },
    {
        id: 4,
        name: 'Merry Brandybuck',
        race: 'Hobbit',
        age: 37,
        home: 'Buckland',
        weapons: ['Barrow-blades'],
        friends: [1, 2, 5, 6],
    },
    {
        id: 5,
        name: 'Pippin Took',
        race: 'Hobbit',
        age: 29,
        home: 'Tookland',
        weapons: ['Barrow-blades'],
        friends: [1, 2, 4, 6],
    },
    {
        id: 6,
        name: 'Legolas',
        race: 'Elf',
        age: 2931,
        home: 'Woodland Realm',
        weapons: ['Bow and arrows', 'Elven knives'],
        friends: [1, 4, 5, 7, 8],
    },
    {
        id: 7,
        name: 'Gimli',
        race: 'Dwarf',
        age: 139,
        home: 'Lonely Mountain',
        weapons: ['Axe'],
        friends: [3, 6, 8],
    },
    {
        id: 8,
        name: 'Aragorn',
        race: 'Man',
        age: 87,
        home: 'Gondor',
        weapons: ['Sword Andúril', 'Bow and arrows'],
        friends: [3, 6, 7],
    },
    {
        id: 9,
        name: 'Gollum',
        race: 'Hobbit',
        age: 589,
        home: 'Caves beneath the Misty Mountains',
        weapons: ['Dagger'],
        friends: [],
    },
    {
        id: 10,
        name: 'Sauron',
        race: 'Maia',
        age: 'Unknown',
        home: 'Barad-dûr, Mordor',
        weapons: ['The One Ring', 'Mace'],
        friends: [],
    },
];

const saruman = {
    id: 11,
    name: 'Saruman',
    race: 'Maia',
    age: 'Unknown',
    home: 'Isengard',
    weapons: ['Staff'],
    friends: [4],
};

/*
1. Напишите функцию, которая принимает массив персонажей
и выводит массив имен персонажей.
 */
const showCharacterName = characters => {
    // return characters.map(el => el["name"])
    return characters.forEach(el => el.name)
    // return characters.forEach(el => el.name).filter(el => el.length > 8)
};
// console.log(showCharacterName(characters))

/*
2. Напишите функцию, которая принимает массив персонажей

Если возраст персонажа равен "Unknown", то вместо него выведите
строку "Возраст неизвестен".
 */

// const checkCharacterAge = characters => {
//    // return characters.map(el => el.age === 'Unknown'
//    //     ? "Возраст неизвестен"
//    //     : el.age
//    // )
//     return characters.map(({age}) => age === 'Unknown'
//         ? "Возраст неизвестен"
//         : age
//     )
// };
// console.log(checkCharacterAge(characters))

/*
3.  Напишите функцию, которая будет добавлять нового персонажа
в конец массива "characters"
и возвращать обновленный массив.
Добавить нужно объект saruman
 */

// const addCharacter = characters => {
//     return [...characters, saruman]
// };
// console.log(addCharacter(characters))

/*
4. Напишите функцию, которая принимает массив персонажей
и выводит в консоль имена персонажей,
у которых нет друзей.
 */
// const checkCharacterFriends = characters => {
//     return characters.filter(el => !el.friends.length && el.name)
//     // return characters.filter(el => el.friends.length === 0)
// };


// const checkCharacterFriends = characters => {
//     return characters.reduce((acc, el) => {
//         if (el.friends.length === 0) {
//             acc.push(el.name)
//         }
//         return acc
//     }, [])
// };
//
// console.log(checkCharacterFriends(characters))

/*
5. Напишите функцию, которая принимает массив персонажей
и выводит в консоль имена всех
персонажей, которые не являются хоббитами.
 */
// const checkCharacterIsHobbit = characters => characters
//     .filter(el => el.race !== 'Hobbit')
//     .map(el => el.name)

// const checkCharacterIsHobbit = characters => {
//     return characters.reduce((acc, el) => {
//         if (el.race !== 'Hobbit') {
//             acc.push(el.name)
//         }
//
//         return acc
//     }, [])
// };
// console.log(checkCharacterIsHobbit(characters))

/*
6. Напишите функцию, которая принимает массив персонажей
и выводит в консоль имена всех
четных персонажей (id).
 */
const checkCharacterIdIsEven = characters => characters.reduce((acc, el) => {
    if (el.id % 2 === 0) {
        // acc.push(el.name)
        return [...acc, el.name]
    }

    return acc
}, [])

// const arr1 = [1,2,2,3,4,5]
// const res2 =  arr1.find((el) => el === 6)
// const res2 =  arr1.includes(2, 3)
// const res2 =  arr1.


// console.log(checkCharacterIdIsEven(characters));

/*
7. Напишите функцию, которая принимает массив персонажей и проверяет,
является ли он магом (имеет ли он в оружии "Staff").
Если да, выведите сообщение "Этот персонаж является магом".
Если нет, выведите сообщение "Этот персонаж не является магом".
*/
const checkCharacterIsWizard = characters => {
    return characters.map(el => el.weapons.includes("Staff")
        ? "Этот персонаж является магом"
        : "Этот персонаж не является магом"
    )

    // characters.forEach(el => el.weapons.includes("Staff")
    //     ? console.log("Этот персонаж является магом")
    //     : console.log("Этот персонаж не является магом")
    // )
};
// checkCharacterIsWizard(characters)

// pop, push, shift, unshift |||  sort, reverse, fill, splice


// let arr = [4, 7, 2, 94, 105, 76];
// let a = arr.splice(2, 2);          // удаление
// let a = arr.splice(2, 2,'#'); // заменяем
// let a = arr.splice(2, 0,'#'); // вставляем
// console.log(a);  // [2, 94]
// console.log(arr);  // [4, 7, 105, 76];

/*
!*8!. Напишите функцию, которая принимает массив персонажей и
меняет возраст персонажа "Sauron" на 100200 лет.
*/
const changeSauronAge = characters => {
    return characters.map(el => el.name === "Sauron" ? {...el, age1: 100200} : el)
};
// console.log(changeSauronAge(characters))

// const arr5 = [1,2,3,4,5]
//
// const res5 = [...arr5].reverse()
//
// console.log(arr5)
// console.log(res5)

/*
!**9!. Напишите функцию, которая принимает массив персонажей
и находит персонажа с наибольшим количеством друзей.
*/
// const checkMaxFriends = characters => {
//     return [...characters].sort((a, b) => a.friends.length - b.friends.length).at(-1).name
//     return [...characters].sort((a, b) => a.friends.length - b.friends.length)[arr.length - 1].name
//     return [...characters].sort((a, b) => b.friends.length - a.friends.length)[0].name
// };
// console.log(checkMaxFriends(characters))

// const arr = [1,2,3,4,5]
//
// const [, a = 5 ] = arr
//
// console.log(a)

// ------------------------------------------------------------
// const nums = [1,2,3,4,5]
// const res1 = nums.reduce((acc, item) => acc + item, '')
//
// console.log(res1)


// Задача:
// 1. выбрать чётные,
// 2. вычислить их квадраты и
// 3. отобрать из них числа больше 50.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
Последовательность решения
Подготовка:
1. Создать универсальную функцию для проверки четное ли это число?
2. Создать универсальную функцию для возведения числа в квадрат?
3. Создать универсальную функцию для проверки условия: больше ли число 50?




1ый способ решения
Решить с помощью map и filter?

1ый способ решения
Решить с помощью reduce?
 */

//
const checkNumIsEven = (num) => {
    return num % 2 === 0
}

const transformNumToSquare = (num) => {
    // return num * num
    return num ** 2
    // return Math.pow(num, 2)
}
// console.log(transformNumToSquare(12))
//
const checkNumIsGreaterThanAnotherNum = (num) => {
    return num > 50
}


// Решение через map/filter
const result = numbers
    .filter(checkNumIsEven)
    .map(transformNumToSquare)
// .filter(checkNumIsGreaterThanAnotherNum)


// console.log(result)
// [64, 100]


// Решение с помощью reduce
// const result1 = numbers.reduce((acc, value) => {
//     if (value % 2 === 0) {
//         const squared = value ** 2
//
//         if ( squared > 50) {
//             return [...acc, squared]
//         }
//     }
//     return acc
// } , [])

// const result2 = numbers.reduce(function (res, num) {
//     if (checkNumIsEven(num)) {
//         const squared = transformNumToSquare(num)
//
//         if (checkNumIsGreaterThan50(squared)) {
//             // res.push(squared)
//             return [...res, squared]
//         }
//     }
//
//     return res
// }, [])

// console.log(result1)


// console.log(result2)
// // [64, 100]


// Задача: с помощью reduce создать ассоциативный массив

// const users = [
//     { id: "123", name: "Vasiliy", age: 18 },
//     { id: "345", name: "Anna", age: 22 },
//     { id: "567", name: "Igor", age: 20 },
//     { id: "789", name: "Irina", age: 24 },
// ]

// const usersAssoc = users.reduce((acc, el) => {
//     acc[el.id] = el
//
//     return acc
// } , {})
//
// console.log(usersAssoc)


// Задача: Получи массив строк:
// griffin-monster-1,
// leshen-monster-2,
// siren-monster-4,
// basilisk-monster-8
const monsters = {
    "griffin": {
        name: "Грифон",
        description: "Монстр с телом льва и крыльями орла",
        habitat: "Обитает в горах и лесах",
        weaknesses: ["Защита от ударов мечом", "Уязвимость к серебру"],
        strengths: ["Сильный залп когтей", "Мощный удар крыльев"],
        loot: ["Грифоновый мутаген", "Крыло грифона", "Грифоновый желчный пузырь"]
    },
    "leshen": {
        name: "Леший",
        description: "Монстр-лесной дух, обладающий силой природы",
        habitat: "Обитает в лесах",
        weaknesses: ["Уязвимость к снежным бурям", "Чувствительность к огню"],
        strengths: ["Способность контролировать растения и животных", "Острый зрительный угол"],
        loot: ["Лешийский мутаген", "Шипастая кора лешия", "Кремень"]
    },
    "siren": {
        name: "Сирена",
        description: "Морское чудовище, привлекающее людей своим пением",
        habitat: "Обитает в морях и океанах",
        weaknesses: ["Невозможно убить без использования серебра", "Чувствительность к высоким звукам"],
        strengths: ["Привлекательный голос", "Быстрое плавание"],
        loot: ["Сиреновый мутаген", "Глаз сирены", "Глас сирены"]
    },
    "basilisk": {
        name: "Василиск",
        description: "Монстр-змей, убивающий своих жертв взглядом",
        habitat: "Обитает в пещерах и подземных лабиринтах",
        weaknesses: ["Чувствительность к звукам", "Уязвимость к яркому свету"],
        strengths: ["Смертоносный взгляд", "Острые клыки"],
        loot: ["Василисковый мутаген", "Коготь василиска", "Яйцо василиска"]
    }
}

const keys = Object.keys(monsters)
const res = keys.map((el, i) => `${el}-monster-${2**i}`)
// const res = keys.map((el, i) => el + '-monster-' + 2**i)
// console.log(res)

