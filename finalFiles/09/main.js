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

//============================== Задача 2 ================================
// Что выведет в консоль и почему?
// Promise.resolve(1)
//     .then(data => console.log(data))
//
//     .then(data => {
//         console.log(data);
//         return 2;
//     })
//
//     .then(data => {
//         console.log(data);
//         throw new Error('Api Error');
//         return 1;
//     })
//
//     .then(data => console.log('Hello'))
//
//     .catch(error => {
//         console.log(error.message);
//         return 3;
//     })
//
//     .then(data => {
//         console.log(data);
//         return 4;
//     })
//
//     .finally(data => {
//         console.log(data);
//         return 5;
//     })
//
//     .then(data => console.log(data))



//============================== Promise API ================================
// Какие статические методы есть у класса Promise?


//============================== Promise.all ================================
// Создай 3 промиса, которые зарезолвятся через 4, 1, 3 сек

// Для чего нужен метод all?


// Что принимает в качестве параметров метод all?


// Что делает all?


// Сколько он будет дожидаться?


// Что возвращает all?


// Как теперь обработать promise?



// Что будет, если хотя бы один promise будет с ошибкой?



//============================== Promise.race ================================
// Для аналогичных промисов примени метод race

// Что возвращает race?


// Что будет если придет ошибка?


// Разница между all race?



//============================== Promise.any ================================
// Как работает any?



// Что возвращает any?



//============================== Promise.allSettled ================================
// Как работает allSettled?

// Что возвращает allSettled?



//============================== async/await ================================

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

