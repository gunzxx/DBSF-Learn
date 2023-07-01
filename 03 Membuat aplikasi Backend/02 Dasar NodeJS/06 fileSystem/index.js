const fs = require("fs");
const path = require('path')

const data = fs.readFileSync(path.resolve(__dirname, 'notes.txt'), 'utf-8');
console.log(data);