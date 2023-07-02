//============================== Промисы ================================
//============================== Базовая информация по HTTP и клиент-серверной архитектуре ===
// Что такое HTTP?
// Что такое протокол?
// Для чего предназначен HTTP протокол?
// Что значит прикладного уровня?
// Что из себя представляет клиент-серверная архитектура?
// Кто является инициатором запроса в клиент-серверной архитектуре?
// Что делает сервер на клиентский запрос?
// Что в этом ответе нас должно волновать (в первую очередь)?
// Для чего статус код ответа?
// Как описать серверу что мы от него хотим при запросе?
// Какие запросы позволяет отправлять fetch?
// Какую технологию поддерживает fetch?
// Что такое AJAX и для чего?
// Какие приложения позволяет делать технология AJAX?

//============================== Метод fetch (отправим запрос на сервер) ====================
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

//============================== Где появляются промисы у нас в проекте? ====================


//============================== Синхронный и Асинхронный код ================================


//============================== Эволюция развития работы с асинхронным кодом ===============
// коллбэки -> промисы


//============================== Что такое callback? =========================================

//
// function startEngine(callback) {
//     return callback()
// }
//
// function start() {
//     return 'Go'
// }
//
// console.log(startEngine(start))



// function startEngine(callback) {
//    setTimeout(() => callback(), 6000)
//     return '1234'
// }
//
// function start() {
//     return 'Go'
// }
//
// console.log(startEngine(start))



//============================== Что такое промис и как его создать? ==========================
// Промис это объект
// new Promise -> принимает callback (executor)

// executor принимает 2 коллбэк функции


// new Promise((resolve, reject) => {
//     resolve(1)
//     // reject('error')
// })



// const myPromise = new Promise((resolve, reject) => {
//     console.log(123)
//     // resolve(1)
//     console.log(234)
//     // reject('error')
// })
//
// console.log(myPromise)

// const promise = {
//     status: pending | fulfilled           | rejected
//     value: undefined | value из resolve  | value из rejected
// }

//============================== Методы промиса ===============================================
// then, catch, finally

// then
/*
then - срабатывает когда запрос завершен успешно или зарезолвился
Какие параметры -> 2 коллбэк функции (первая для успешного выполнения, вторая - неуспешного)
 */

// then((resolved) => {}, (rejected) => {})

//
// const myPromise = new Promise((resolve, reject) => {
//     // console.log(123)
//     // resolve(1)
//     // console.log(234)
//     // reject('error')
//     // setTimeout(() => resolve('resolve'), 1000)
//     setTimeout(() => reject('reject'), 1000)
// })
//
// myPromise.then((res) => console.log(res))


// catch
/*
catch - срабатывает когда запрос неуспешен (зареджектился)
Какие параметры -> коллбэк функцию
 */

// const myPromise = new Promise((resolve, reject) => {
//     // console.log(123)
//     // resolve(1)
//     // console.log(234)
//     // reject('error')
//     // setTimeout(() => resolve('resolve'), 1000)
//     setTimeout(() => reject('reject'), 1000)
// })

// const p1 = myPromise.then((res) => console.log(res))
//
// const p2 = p1.catch((res) => console.log(res))

// const p3 = p2.catch((res) => console.log(res))
//
// console.log(p1 === p2)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(json => console.log('Ошибка'))


// finally
/*
finally - срабатывает вне зависимости от того зарезолвился или зареджектился промис
Какие параметры -> коллбэк функцию

!!! Ничего не принимает и ничего не возвращает
 */

// finally(() => {})


//============================== Цепочка промисов =============================================
// const myPromise = new Promise((resolve, reject) => {
//
//     // resolve(2)
//     reject('Все пропало')
// })
//     .finally(() => console.log('Просто выведу в консоль'))
//     .then((data1) => console.log(data1 + 3))
//     .then((data2) => console.log(data2 * 2))
//     .catch((err) => console.log(err))
//     // .catch((err) => new Error('Еще ошибка'))
//     .catch((err) => console.log(err))
//     .then(() => {
//         return new Promise((resolve) => {
//             resolve('Я новый резолв')
//         })
//     })
//     .then((data4) => console.log(data4))
//     .catch((err) => console.log(err))
//
//
// console.log(myPromise)


// ============================================= Задачи на отработку =====================================================

// ============================================= Задача 1 =====================================================
/*
!!!!
const p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))
!!!!
 */


// ============================================= Задача 2 =====================================================
/*
!!!!
const p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
  })
  .catch(error => console.log(error))
  .then(error => console.log(error))
!!!!
 */


// const p = new Promise((resolve, reject) => {
//     reject('The Fails!')
// })
//     .catch(error => console.log(error))
//     .then(error => console.log(error))

// ============================================= Задача 3 =====================================================
/*
!!!!
const p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
  })
  .catch(error => console.log(error.message))
  .catch(error => console.log(error.message))
!!!!
 */


// ============================================= Задача 4 =====================================================
/*
!!!!
new Promise((resolve, reject) => {
    resolve('Success!')
  })
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return "actually, that worked"
  })
  .catch(error => console.log(error.message))
!!!!
 */

// new Promise((resolve, reject) => {
//     resolve('Success!')
// })
//     .then(() => {
//        console.log(Error('Oh noes!'))
//     })
//     .catch(error => {
//         console.log(error)
//         return "actually, that worked"
//     })
//     .catch(error => console.log(error.message))

// ============================================= Задача 5 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })
!!!!
 */

// ============================================= Задача 6 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
    return data
  })
  .then(console.log)
!!!!
 */

// ============================================= Задача 7 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(data => {
    data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })
!!!!
 */

// ============================================= Задача 8 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return 'actually, that worked'
  })
  .then(data => {
    throw Error('The fails!')
  })
  .catch(error => console.log(error.message))
!!!!
 */


// ============================================= Задачи с собесов =====================================================

// ============================================= Задача 1 =====================================================
/*
!!!!
Promise.resolve("1")
    .then(data => {
        console.log(data);
    })
    .then(data => {
        console.log(data);
        return "2";
    })
    .then(data => {
        console.log(data);
    })
!!!!
 */

// ============================================= Задача 2 =====================================================
/*
!!!!
Promise.reject(1)
    .then(data => {
        console.log(data);
    })
    .then(null, data => console.log(data))
    .then(() => console.log('ok'));

Promise.reject()
    .then(
        data => console.log('ok'),
        data => console.log('error')
    )
!!!!
 */



// ============================================= Задача 3 =====================================================
/*
!!!!
Promise.reject("Api Error")
    .then(data => console.log('ok'))
    .catch(error => {
        console.log(error);
        return "1";
    })
    .then(data => {
        console.log(data);
    })
!!!!
 */

// ============================================= Задача 4 =====================================================
/*
!!!!
Promise.reject()
    .catch(() => {
        console.log('error1');
        return Promise.reject();
    })
    .catch(() => {
        console.log('error2');
    })
!!!!
 */

// ============================================= Задача 5 =====================================================
/*
!!!!
Promise.resolve()
    .then(data => {
        throw new Error('Api Error');
        return 1;
    })

    .then(data => console.log('ok'))

    .catch(error => {
        console.log(error.message); // => "Api Error"
        return "2";
    })

    .then(data => {
        console.log(data); // => "2"
    })
!!!!
 */

// ============================================= Задача 6 =====================================================
/*
!!!!
Promise.reject("Api Error")
    .catch(null)
    .then(data => console.log('ok'))
    .catch(error => console.log(error))
    .then(data => console.log('ok'))
!!!!
 */


// ============================================= Задача 7 =====================================================
/*
!!!!
Promise.resolve()
    .then(() => {
        return "1";
    })
    .finally(data => {
        console.log(data);
        return "2";
    })
    .then(data => console.log(data))
!!!!
 */

// ============================================= Задача 8 =====================================================
/*
!!!!
Promise.reject()
    .finally(data => {
        console.log('finally'); // => "finally"
    })
!!!!
 */

// ============================================= Задача 9 =====================================================
/*
!!!!
Promise.resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))

Promise.resolve()
    .then(() => console.log(11))
    .then(() => console.log(12))
!!!!
 */

// ============================================= Задача 10 =====================================================
/*
!!!!
Promise.resolve()
    .then(() => console.log(1))
    .then(() => { console.log(2); throw new Error(); })
    .catch(() => console.log(3))
    .then(() => console.log(4))

Promise.resolve()
    .then(() => console.log(11))
    .then(() => { console.log(12); throw new Error(); })
    .catch(() => console.log(13))
    .then(() => console.log(14))
!!!!
 */




