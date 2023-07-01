// console.log(process.env.PWD);
// console.log(process.memoryUsage());
// console.log(process.argv);

// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);


// Challenge
const initialMemoryUsage = process.memoryUsage().heapUsed // TODO 1
const yourName = process.argv[2] // TODO 2
const environment = process.env.NODE_ENV // TODO 3
 
for (let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed // TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
