const { getUser, getWeather } = require('./03-3 utils-2')

function getUserWeather(id, callback) {
    getUser(id, (error, data) => {
        if (error) {
            return callback(error.message, null);
        }

        getWeather(data.location, (error, data) => {
            if (error) {
                return callback(error.message, null);
            }
            return callback(null, data);
        })
    })
}

getUserWeather(2, (error, data) => {
    if(error){
        return console.log(error);
    }
    return console.log(data);
})