//============================== Промисы ================================
//============================== Базовая информация по HTTP и клиент-серверной архитектуре ===


//============================== Метод fetch (отправим запрос на сервер) ====================


//============================== Где появляются промисы у нас в проекте? ====================


//============================== Синхронный и Асинхронный код ================================



//============================== Эволюция развития работы с асинхронным кодом ===============



//============================== Что такое callback? =========================================



//============================== Что такое промис и как его создать? ==========================



//============================== Методы промиса ===============================================



//============================== Цепочка промисов =============================================




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




