const { promisify } = require('util');
const { getUser, getWeather } = require('./05 utils')

const getUserPromise = promisify(getUser)
const getWeatherPromise = promisify(getWeather)

function getUserWeather(id) {
    return getUserPromise(id)
        .then(user => {
            return getWeatherPromise(user.location)
                .then(weather => {
                    return ({ ...user, ...weather });
                });
        });
}

getUserWeather(1)
    .then(console.log)
    .catch(err => console.log(err.message))