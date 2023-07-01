const fs = require("fs");

const readableStream = fs.createReadStream('notes.txt',{
    highWaterMark:10,
});

readableStream.on('readable',(data)=>{
    try{
        process.stdout.write(`[${readableStream.read()}]`)
    }catch(err){
        console.log(err.message);
    }
})

readableStream.on('end',()=>{
    console.log("\n\n\nSelesai.");
})