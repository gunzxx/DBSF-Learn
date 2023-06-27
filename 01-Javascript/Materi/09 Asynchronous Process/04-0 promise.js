const { getUser, getWeather } = require('./03-3 utils-2')

function getUserWeather(id){
    let _user;

    return getUser(id)
        .then(user=>{
            _user = user;
            return getWeather(user.location);
        })
        .then(weather => ({..._user,...weather}));
}

getUserWeather(1)
.then(console.log)
.then(console.log)