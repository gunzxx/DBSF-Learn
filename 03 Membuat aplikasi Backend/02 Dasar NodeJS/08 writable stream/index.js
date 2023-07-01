const fs = require('fs');

const writableText = fs.createWriteStream('notes.txt');

writableText.write("HALO...\n");
writableText.write("Aku sedang sedih :(\n");
writableText.write("Aku butuh teman :)\n");
writableText.end('Semoga kamu mengerti :)');