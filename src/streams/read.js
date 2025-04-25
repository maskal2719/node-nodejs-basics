import { createReadStream } from 'fs';
const read = async () => {
    createReadStream('./files/fileToRead.txt').pipe(process.stdout);
};

await read();