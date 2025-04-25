import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
const compress = async () => {
    const input = createReadStream('files/fileToCompress.txt');
    const output = createWriteStream('files/archive.gz');
    input.pipe(createGzip()).pipe(output);
};

await compress();