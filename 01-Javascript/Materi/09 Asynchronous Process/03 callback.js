function getUsers(callback) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        return callback(users, users[0]);
    }, 3000);
}

// function usersCallback(users) {
//     console.log(users);
// }

getUsers(
    (tes1,tes2) => {
        console.log(tes1);
        console.log(tes2);
    }
);