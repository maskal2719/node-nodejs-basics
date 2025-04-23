import fs from "node:fs/promises";

const list = async () => {
    try {
        await fs.readdir('./files').then((files) => {
            console.log(files);
        });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();

