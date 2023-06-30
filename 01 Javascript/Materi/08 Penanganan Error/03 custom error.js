class ValidasiError extends Error{
    constructor(message){
        super(message);
        this.name = "Validasi Error"
    }
}

// const json = '{"name":"John","age": 20 }';
const json = '{"age": 20 }';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new ValidasiError("Properties name is Required");
    }

    // errorCode;

    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    }
    else if (error instanceof ReferenceError) {
        console.log(`Reference Error : ${error.message}`);
    }
    else if (error instanceof ValidasiError) {
        console.log(`Validasi Error : ${error.message}`);
    }
    else {
        console.log(error.stack);
    }
}
