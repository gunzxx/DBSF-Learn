try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
} finally{
    console.log("Program selesai"); // Finally
}