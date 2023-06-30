function getUsers1(isOnline:boolean, callback: (error: Error | null, data: any[] | null) => void) {
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];


        if (!isOnline) {
            return callback(new Error("Tidak ada akses internet."), null);
        }

        return callback(null, users);
    }, 3000);
}


getUsers1(
    false,
    (error, data) => {
        if (error) {
            return console.log(error.message);
        }
        console.log(data);
    }
);