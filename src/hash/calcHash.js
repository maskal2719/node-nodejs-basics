import crypto from 'crypto';
import * as fs from "node:fs/promises";

const calculateHash = async () => {
    try {
        const fileBuffer = await fs.readFile('files/fileToCalculateHashFor.txt');
        const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
        console.log(hash);
    } catch {
        throw new Error('FS operation failed');
    }
};

await calculateHash();