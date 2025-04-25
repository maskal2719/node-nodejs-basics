import {createReadStream, createWriteStream} from "fs";
import {createGunzip} from "zlib";

const decompress = async () => {
    const input = createReadStream('files/archive.gz');
    const output = createWriteStream('files/fileToCompress.txt');
    input.pipe(createGunzip()).pipe(output);
};

await decompress();