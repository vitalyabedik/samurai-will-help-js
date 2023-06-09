// Типы данных
// 1. примитивы
// 2. Объекты

const string = '123'
const number = 123
const boolean = true

const bigInt = 10n

const nullType = null
const undefinedType = undefined
// const symbolType = symbol

const obj = {} // []


// typeof - тип данных в строковом виде

// console.log(typeof (typeof null))


// Инкремент и декремент
// Операнды и операторы
// операнд - то к чему применяем
// унарный - один
// бинарный - бинарный 2 операнда
// тернарный - три операнда


// let index = 1;

// console.log(index++) // 1
// console.log(++index) // 3
// console.log(++index) // 4
// console.log(index++) // 4
// console.log(index)   // 5


// Операторы сравнения

// == и ===

// == - сравниваются данные и идет преобразование
// === - учитывает тип данных при сравнении


// falsy значения
// console.log(Boolean(1))

// ''
// 0
// undefined
// null
// false

// NaN


/*
1. Что вернут данные выражения?
 */

// console.log(5 == 5);     // true
// console.log(5 == '5');   // true
//
// console.log(5 === 5);    // true
// console.log(5 === '5');  // false
//
// console.log(5 > 5);      // false
// console.log(5 < 5);      // false
// console.log(5 >= 5);     // true
// console.log(5 <= 5);     // true

// console.log('5px' > 3);  // false  // 5px не может преобразовать к числу и получается NaN
// console.log('5px' < 10); // false
// console.log('A' > 'a');  // false // маленький символ юникода больше большого
// console.log('B' < 'b');  // true

// console.log('5px' > '5pxyt')


// Условные операторы

/*
1. Выведи в консоль, если погода хорошая, то 'Идём гулять', если нет - 'Идём в кино'.
Решить с помощью if else и тернарного оператора
 */
const weather = 'хорошая';

/*
2. Напишите условие для функции salutation, которая возвращает приветствие с именем пользователя,
если имя пользователя задано, иначе возвращает общее приветствие:
Если параметр name задан, то вернуть строку, содержащую Рад видеть, и значение параметра name !
В противном случае вернуть строку, содержащую Привет, друг!.
 */

const salutation = (name) => {

}

// console.log(salutation('Всех'))
// console.log(salutation())


// Оператор ненулевого слияния ??
/*
Что выведется в консоль?
 */

let username = null; // undefined null
const greeting = `Привет, ${username ?? 'Гость'}!`;
// console.log(greeting);


// Логические операторы
// && - запинается на лжи :)
// || - запинается на правде :)

// console.log(10 && 2)        // 2
// console.log(0 && 1)         // 0
// console.log(23 || 7)        // 23
// console.log(0 || 9)         // 9

// ! - наибольший приоритет

// console.log(0 || 1 && 4)    // 4
// console.log(0 && 2 || 8)    // 8


/*
1. Если a = true и b = true, то что вернут выражения:
a && b
!a && b
a && !b
!a && !b
!(a && b)
!(!a && !b)
 */

// const a = true
// const b = true
//
// console.log(a && b)        // true
// console.log(!a && b)       // false
// console.log(a && !b)       // false
// console.log(!a && !b)      // false
// console.log(!(a && b))     // false
// console.log(!(!a && !b))   // true

/*
2. Если a = true и b = true, то что вернут выражения:
a || b
!a || b
a || !b
!a || !b
!(a || b)
a || b
!(!a || !b)
*/

// const a = true
// const b = true

// console.log(a || b)       // true
// console.log(!a || b)      // true
// console.log(a || !b)      // true
// console.log(!a || !b)     // false
// console.log(!(a || b))    // false
// console.log(a || b)       // true
// console.log(!(!a || !b))  // true


/*
3. Заданы переменные:
const a = '':
const b = 9:
const c = null:

Что вернут выражения:
!!(!a || !b && !c)
!!(a || !b && !c)
!!(a || !b || c)
!(!a && b && !c)
!(a || !b && !c)
*/

const a = '';     // false
const b = 9;      // true
const c = null;   // false

// console.log(!!(!a || !b && !c))    // true
// console.log(!!(a || !b && !c))     // false
// console.log(!!(a || !b || c))      // false
// console.log((!a && !c && !b))      // false  // !((1 * 1 * 1 ) ) -> false
// console.log(!(a || !b && !c))      // true


/*
3. Если переменная a равна 10, то выведите 'равно 10', иначе выведите 'не равно 10'.
Проверьте работу скрипта при a, равном 10, 5, -10.
 */

/*
4. Если переменная a больше или равна 0, а переменная b меньше или равна 100,
то выведите 'переменная a больше или равна 0, и переменная b меньше или равна 100',
иначе выведите 'одно или оба условия не выполняются'.
Проверьте работу скрипта при a и b, равном 50 и 150, -10 и 50.
*/


/*
5. Если переменная a является четным числом, то выведите 'a - четное число', иначе выведите 'a - нечетное число'.
Проверьте работу скрипта при a, равном 10, 5, -10.
*/


/*
6. Если переменная a больше нуля, то выведите 'a - положительное число', иначе выведите 'a - отрицательное число'.
Проверьте работу скрипта при a, равном 10, -5, 0.
*/


// Switch
/*
1.Напишите функцию getDiscount, принимающую параметр userStatus,
которая присваивает скидку в зависимости от статуса пользователя:
Если статус пользователя равен 'VIP', то скидка равна 25%.
Если статус пользователя равен 'privileged', то скидка равна 15%.
Если статус пользователя равен 'clubMember', то скидка равна 5%.
В остальных случаях скидка равна 0%.
Решить двумя способами, с помошью else if и switch
 */

// const getDiscount = (userStatus) => {
//     switch (userStatus) {
//         case('VIP') :
//             return 25
//         case('privileged') :
//             return 15
//         case('clubMember') :
//             return 5
//         default:
//             return 0
//     }
// }

const getDiscount = (userStatus) => {
    if (userStatus === 'VIP') {
        return 25
    } else if (userStatus === 'privileged') {
        return 15
    } else if (userStatus === 'clubMember') {
        return 5
    } else {
        return 0
    }
}

// console.log(getDiscount('VIP'))
// console.log(getDiscount('privileged'))
// console.log(getDiscount('clubMember'))
// console.log(getDiscount('smth'))


/*
1.Напишите функцию checkActionType, принимающую в качестве параметра определенное действие (actionType),
которая выполняет какую-либо логику (действие) в зависимости от полученного actionType:
Если actionType равен 'FETCH_DATA', то выведи в консоль - 'Производится отправка запроса на сервер'.
Если actionType равен 'LOADING_DATA', то выведи в консоль - 'Производится загрузка данных - покажи Preloader'.
Если actionType равен 'ERROR_DATA', то выведи в консоль - 'Произошла ошибка при получении данных - выведи сообщение с предупреждением'.
Если actionType равен 'GET_CURRENT_LOCATION', то выведи в консоль - 'Производится получение текущих координат'.
Если actionType равен 'ADD_NOTE', то выведи в консоль - 'Создаем заметку'.
В остальных случаях выведи в консоль - 'Дефолтное состояние - ничего не делаем'.
Решить с помощью switch
 */


// const checkActionType = (actionType) => {
//     switch (actionType) {
//         case ('FETCH_DATA'):
//             console.log(('Производится отправка запроса на сервер'))
//         case ('LOADING_DATA'):
//             return ('Производится загрузка данных - покажи Preloader')
//         case ('ERROR_DATA'):
//             return ('Произошла ошибка при получении данных - выведи сообщение с предупреждением')
//         case ('GET_CURRENT_LOCATION'):
//             return ('Производится получение текущих координат')
//         case ('ADD_NOTE'):
//             return ('Производится отправка запроса на сервер')
//
//         default:
//             return ('Дефолтное состояние - ничего не делаем')
//     }
// }

// console.log(checkActionType('FETCH_DATA'))
// console.log(checkActionType('LOADING_DATA'))
// console.log(checkActionType('ERROR_DATA'))
// console.log(checkActionType('GET_CURRENT_LOCATION'))
// console.log(checkActionType('ADD_NOTE'))
// console.log(checkActionType('SMTH'))


// циклы

// 1. Вывести в консоль числа от 1 до 10.

// 2. Вывести в консоль таблицу умножения на 5 в виде: "5 x 1 = 5", "5 x 2 = 10", ..., "5 x 10 = 50".

// 3. Вычислить и вывести в консоль сумму чисел от 1 до 100.

// 4. Вычислить и вывести в консоль среднее арифметическое чисел от 1 до 10.

// 5. Вычислить и вывести в консоль произведение чисел от 1 до 5.

// 6. Вывести в консоль все нечетные числа от 1 до 20.


// map


const arr = [1, 2, 3, 4, 5]

// const res = arr.map((element, index) => {
//     console.log('element', `${element} Что-нибудь`)
//     console.log('index', index)
//     console.log('===================')
// })
//
// console.log(res)

const res1 = arr.filter((el) => el > 3 )
console.log(res1)