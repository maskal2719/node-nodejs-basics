import { createWriteStream } from 'fs';

const write = async () => {
    const stream = createWriteStream('./files/fileToWrite.txt');
    process.stdin.pipe(stream);
};

await write();