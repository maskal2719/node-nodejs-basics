import fs from "node:fs/promises";

const read = async () => {
    try {
        const data = await fs.readFile('./files/fileToRead.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();