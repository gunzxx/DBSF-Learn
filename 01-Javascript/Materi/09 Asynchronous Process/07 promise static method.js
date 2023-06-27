/***
 * Empat static method dari class Promise yang umum digunakan, yaitu Promise.all, Promise.race, Promise.allSettled, dan Promise.any.
 */

/**
 * Promise.all()
 * Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel. Method ini menerima sebuah array yang berisi beberapa
 * Promise sebagai argumen. Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang di-resolve dalam masing-masing
 * Promise yang diletakkan pada array argumen.
 */
const all1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((_,reject) => setTimeout(() => reject(new Error("Tes Promise.all() error.")), 2000));
const all2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const all3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([all1, all2, all3])
    .then((values) => console.log(values))
    .catch(err => console.log(err.message));


/**
 * Promise.race()
 * Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(). Namun, ia hanya mengembalikan nilai 
 * Promise yang paling cepat menyelesaikan eksekusinya. Lalu, bagaimana jika salah satu Promise ada yang rejected? Jika proses rejection
 * merupakan proses yang paling cepat, ia akan mengembalikan rejection tersebut. Jika rejection tidak kalah cepat dengan proses lain yang
 * nilainya fulfilled, ia akan tetap mengembalikan nilai resolved tercepat.
 */
const race1 = new Promise((_, reject) => setTimeout(() => reject(new Error('Tes Promise.race() error.')), 3000));
const race2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const race3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.race([race1, race2, race3])
    .then((value) => console.log(value))
    .catch(err => console.log(err.message));

/**
 * Promise.allSettled()
 * Promise.allSettled() bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang 
 * dieksekusi dalam bentuk array of object dengan format berikut.
    {
    status: 'fulfilled' | 'rejected',
    value: 'value of the Promise',
    reason: 'error of the Promise',
    }
 */
const allSettled1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const allSettled2 = new Promise((_, reject) => setTimeout(() => reject(new Error("Tes Promis.allSettled() error.")), 2000));
const allSettled3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
Promise.allSettled([allSettled1, allSettled2, allSettled3])
    .then((results) => console.log(results));

/**
 * Promise.any
 * Method Promise terakhir yang akan kami bahas adalah Promise.any(). Cara kerja method ini mirip seperti Promise.race(), tetapi hanya 
 * mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya 
 * dengan pesan “All Promises were rejected”.
 */
// contoh resolve
const promiseResolve1 = new Promise((resolve, _) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, _) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, _) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message));

// contoh rejecte
const promiseReject1 = new Promise((_, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((_, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((_, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message));