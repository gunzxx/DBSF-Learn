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
    true,
    (error, data) => {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log(data);
        }
    }
);