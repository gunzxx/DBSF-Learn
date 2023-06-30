function getUsers(isOnline, callback) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];


        if (!isOnline) {
            return callback(new Error("Tidak ada akses internet.", users));
            return;
        }

        return callback(null, users);
    }, 3000);
}

function usersCallback(error,data) {
    if (error) {
        return console.log(error.message);
    }
    console.log(data);
}

getUsers(true,usersCallback);
getUsers(false,usersCallback);