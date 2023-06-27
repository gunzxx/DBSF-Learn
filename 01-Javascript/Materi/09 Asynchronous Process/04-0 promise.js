/**
 * Promise (dalam Bahasa Indonesia janji) di JavaScript merupakan sebuah objek yang merepresentasikan operasi asynchronous.
 * Kondisi/status pada promise dibagi menjadi 3, yaitu :
 ** Pending merupakan keadaan Promise sedang berjalan. 
 ** Fulfilled merupakan keadaan Promise yang terpenuhi.
 ** Rejected merupakan keadaan Promise yang gagal terpenuhi.
 */

const { getUser, getWeather } = require('./04-0 utils')

function getUserWeather(id) {
    let _user;

    return getUser(id)
        .then((user) => {
            _user = user;
            return getWeather(user.location);
        })
        .then((weather) => ({ ..._user, ...weather }) );
}

getUserWeather(12)
    .then(console.log)
    .catch(err => console.log(err.message));