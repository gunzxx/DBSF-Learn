function getUser(id, callback) {
    setTimeout(()=>{
        if (!id) {
            return callback(new Error("Id tidak valid."), null);
        }

        const users = [{ name: "Guntur", location: "Jawa Timur" , id:1}];
        const user = users.find(user => user.id == id);
        if(!user){
            return callback(new Error("User tidak ditemukan."), null);
        }
        
        return callback(null, user);
    },1000)
}

function getWeather(location, callback) {
    setTimeout(()=>{
        if (!location) {
            return callback(new Error("Lokasi tidak valid."), null);
        }
        return callback(null, { weather: "Rainly", temperature: 25.7 });
    },1000)
}

module.exports = {getUser, getWeather}