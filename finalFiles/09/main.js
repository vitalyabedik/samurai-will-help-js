//============================== Повторение ================================

//============================== Задача 1 ================================
// Что выведет в консоль и почему?
// const p = Promise.resolve(4);
//
//     p
//     .then(data => {
//         console.log(data);
//         throw new Error('');
//     })
//     .catch(err => {
//         console.log('err');
//         return 'ok';
//     })
//     .finally((data) => {
//         console.log(data);
//         return 1;
//     })
//     .then((data) => {
//         console.log(data);
//     })


// const p = Promise.resolve(4);
//
// p
//     .then(data => {
//         console.log(data);                                             // 4
//         throw new Error('Введены неправильные данные');                // создаем ошибку и прокидываем дальше
//     })
//
//     .catch(err => {
//         console.log('err');                                            // err
//
//         return new Error('Ошибка');
//     })
//     .then((data) => {
//         console.log(data);                                              // ok
//     })
//     .catch(err => {
//         console.log(err);                                            // err
//     })


//============================== Задача 2 ================================
// Что выведет в консоль и почему?
// Promise.resolve(1)
//     .then(data => console.log(data))                     // 1
//
//     .then(data => {
//         console.log(data);                               // undefined
//         return 2;
//     })
//
//     .then(data => {
//         console.log(data);                              // 2
//         throw new Error('Api Error');                   // создаем ошибку и пробрасываем
//         return 1;
//     })
//
//     .then(data => console.log('Hello'))                  // пропускаем
//
//     .catch(error => {
//         console.log(error.message);                     //  'Api Error'
//         return 3;
//     })
//
//     .then(data => {
//         console.log(data);                             // undefined -> !!! 3
//         return 4;
//     })
//
//     .finally(data => {
//         console.log(data);                             // undefined
//         return 5;
//     })
//
//     .then(data => console.log(data))                   // undefined -> !!! 4


//============================== Promise API ================================
// Какие статические методы есть у класса Promise?
// resolve reject all any allSettled race

//============================== Promise.all ================================
// Создай 3 промиса, которые зарезолвятся через 4, 1, 3 сек

// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Я первый промис'), 4000)
// })
//
// const pr2 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Я второй промис'), 1000)
//     reject('Ошибка')
// })
//
// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Я третий промис'), 3000)
// })

// const pr4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Я четвертый промис'), 500)
// })
//
// const pr5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Я пятый промис'), 2000)
// })
//
// pr1.then((res) => console.log(res))
// pr2.then((res) => console.log(res))
// pr3.then((res) => console.log(res))

// Для чего нужен метод all?

// const res = Promise.all([pr1, pr2, pr3, pr4, pr5])
//
// res.then(res => console.log(res)).catch(e => console.log(e))


// Что принимает в качестве параметров метод all?


// Что делает all?


// Сколько он будет дожидаться?


// Что возвращает all?


// Как теперь обработать promise?


// Что будет, если хотя бы один promise будет с ошибкой?


//============================== Promise.race ================================
// Для аналогичных промисов примени метод race

// const pr1 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Я первый промис'), 4000)
//     reject('Я первый промис')
// })
//
// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Я второй промис'), 1000)
// })
// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Я третий промис'), 3000)
// })
//
// const res = Promise.race([pr1, pr2, pr3])
//
// console.log(res)
// res.then(data => console.log(data))

// Что возвращает race?


// Что будет если придет ошибка?


// Разница между all race?


//============================== Promise.any ================================
// Как работает any?


// Что возвращает any?


// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Я первый промис'), 4000)
//     // reject('Я первый промис')
// })
//
// const pr2 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Я второй промис'), 1000)
//     setTimeout(() => reject('Я второй промис'), 1000)
// })
//
// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Я третий промис'), 3000)
// })
//
// const res = Promise.any([pr1, pr2, pr3])
//
// res.then(data => console.log(data))

//============================== Promise.allSettled ================================
// Как работает allSettled?

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Я первый промис'), 4000)
    // reject('Я первый промис')
})

const pr2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('Я второй промис'), 1000)
    setTimeout(() => reject('Я второй промис'), 1000)
})

const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Я третий промис'), 3000)
})

const res = Promise.allSettled([pr1, pr2, pr3])

res.then(data => console.log(data))

// Что возвращает allSettled?


//============================== async/await ================================
// const foo1 = () => {
//     return new Promise(res => {
//        res(123)
//     })
// }
//
// console.log(foo1())

// arrow
// const foo = async () => {
//     return 123
// }
//
// // fd
// async function foo1() {
//     return 123
// }
//
// // fe
// const foo2 = async function() {
//     return 123
// }

// console.log(foo())
// console.log(foo1())
// console.log(foo2())


//============================== прочитать ответ ================================
// const foo = async () => {
//     return 123
// }
//
// const promise = foo()
//
// console.log(promise)
// foo()
//     .then(res => console.log(res))


// const timerPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(123)
//         }, 2000)
//     })
// }
//
// const asyncFn = async () => {
//     console.log('Timer starts')
//     const resAw = await timerPromise()
//
//     console.log(resAw)
//     console.log('Timer ended')
// }
//
// console.log('start')
// asyncFn()
//
// console.log('end')
// asyncFn().then(res => console.log(res))


//============================== Ключевое слово async ================================
// Что позволяет делать?


//============================== Ключевое слово await ================================
// Что позволяет делать?

// Разные варианты записи функций с ключевым словом async


//============================== Задание ================================
/*
1. Отправь запрос с методом get для получения пользователей, используя метод fetch
const USERS_URL = `https://jsonplaceholder.typicode.com/users`
2. Обработай ответ response и декодируй его с помощью метода (какого) ????
3. Выведи в консоль users
console.log('users', users)
4. Обработай возможную ошибку и в случае ее возникновения: выведи error
console.log('error', error)

5.Выведи в консоль первого пользователя (с id=1)
 console.log('firstUserId', firstUserId)
6. Получи весь список задач (todos) для первого пользователя (с id=1)
Подумай где это нужно делать?

Базовый URL:
const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`

Пример url:
const USERS_URL = `https://jsonplaceholder.typicode.com/todos?userId=1`

Подсказка: нужно отправить новый запрос, используя данные полученные из предыдущего запроса
7. Выведи данные задачи в консоль и проделай все по аналогии с пользователями
(декодирование, обработка ошибки и тд):
console.log('todos', todos)

Проверь полученный результат (везде дб userId=1)

8. Получается неудобный код (если делать запросы снова -> растет вправо)
-> перепиши код на async/await

Для этого создай функцию getTodosWithUserData

9. Вызови результат функции в консоль
console.log('promise', promise)

10. Обработай ошибки и напиши какой-нибудь finally
11. Проверь работоспособность catch
12. Попробуй сломать URL -> посмотри что будет
 */

// fetch
// const USERS_URL = `https://jsonplaceholder.typicode.com/users`
// const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`
//
// fetch(USERS_URL)
//     .then(response => response.json())
//     .then(users => {
//         // console.log('users', users)
//         const firstUserId = users[0].id
//         // console.log('firstUserId', firstUserId)
//
//         fetch(`${TODOS_URL}?userId=${firstUserId}`)
//             .then(response => response.json())
//             .then(todos => {
//                 console.log(todos)
//             })
//     })
//     .catch(error => {
//         console.log('error', error)
// //     })

// async/await
// const USERS_URL = `https://jsonplaceholder.typicode.com/u`
// const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`
//
// const getTodosWithUserData = async () => {
//     console.log('включили крутилку')
//     try {
//         const usersResponse = await fetch(USERS_URL)                              // then
//         if (!usersResponse.ok) {
//             throw new Error('Ошибка в получении данных о пользователях!')
//         }
//         const users = await usersResponse.json()                                       // then
//         const firstUserId = users[0].id
//
//         const todosResponse = await fetch(`${TODOS_URL}?usId=${firstUserId}`)  // then
//         if (!todosResponse.ok) {
//             throw new Error('Ошибка в получении данных о задачах!')
//         }
//         const todosFirstUser = await todosResponse.json()                             // then
//
//         return todosFirstUser
//     } catch (error) {
//         console.log(error.message + 'я в catch')
//     } finally {
//         console.log('выключили крутилку')
//     }
// }
//
// getTodosWithUserData().then(res => console.log(res))


//============================== Задачи ================================

//============================== Задача 1 ================================

/*
Требуется переписать данный код, который использует then, catch и finally, в код,
который использует исключительно async await и try, catch, finally.


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
const createNewPost = () => {
    isLoading = true;
    fetch(POSTS_URL, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('result', result)
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(() => {
            isLoading = false;
        });
};
createNewPost();
 */


// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
//
// const createNewPost = async () => {
//     try {
//         isLoading = true;
//         const response = await fetch(POSTS_URL, {method: 'POST'})
//         const result = await response.json()
//
//         return result
//     } catch (error) {
//         console.log(error)
//     } finally {
//         isLoading = false;
//     }
// }
//
// createNewPost().then(res => console.log(res))

//============================== Задача 2 ================================
/*
Требуется переписать данный код, который использует then и catch, в код, который
использует исключительно async await и try, catch.

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = (ids) => {
const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
Promise.all(requests)
.then((responses) => {
const dataResults = responses.map((data) => data.json());
return Promise.all(dataResults)
})
.then((allTasks) => {
console.log(allTasks);
})
.catch((error) => {
console.log(error);
})
}
getTodosByIds([43, 21, 55, 100, 10]);
 */

