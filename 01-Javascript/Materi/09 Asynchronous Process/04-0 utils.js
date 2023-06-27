const fs = require("fs");
const { resolve } = require("path");

function getUser(id) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if (!id) {
                return reject(new Error("Id tidak valid."));
            }
    
            const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
            const user = users.find(user => user.id == id);
            if (!user) {
                return reject(new Error("User tidak ditemukan."));
            }
            // console.log(user);
            resolve(user);
        }, 1000)
    })
}

// getUser(13)
// .then(data=>console.log(data))
// .catch(reason => console.log(reason.message));

function getWeather(location) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (!location) {
                return reject(new Error("Lokasi tidak valid."));
            }
            resolve({ weather: "Rainly", temperature: 25.7 });
        }, 1000)
    })
}

module.exports = { getUser, getWeather }