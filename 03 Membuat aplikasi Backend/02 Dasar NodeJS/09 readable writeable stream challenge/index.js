/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');

const inputFile = fs.createReadStream('input.txt',{
    highWaterMark : 15,
});

const outputFile = fs.createWriteStream('output.txt');
inputFile.on('readable',()=>{
    try{
        outputFile.write(`${inputFile.read()}\n`);
    }catch(err){
        console.log(err.message);
    }
});

// outputFile.end("Selesai");