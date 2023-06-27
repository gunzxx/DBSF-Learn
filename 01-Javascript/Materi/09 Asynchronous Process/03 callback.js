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

// function usersCallback(users) {
//     console.log(users);
// }

// getUsers(
//     (tes1,tes2) => {
//         console.log(tes1);
//         console.log(tes2);
//     }
// );

getUsers(
    true,
    (error, data) => {
        if(error){
            console.log(error.message);
        }
        else{
            console.log(data);
        }
    }
);le.log(data);