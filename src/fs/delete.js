import * as fs from "node:fs/promises";
const remove = async () => {
    try {
        await fs.unlink('./files/fileToRemove.txt');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();