const { promises: fsPromises } = require('fs');


// Reads the file and returns the content as an array of lines
const readInput = async (filePath: string): Promise<string[]> => {
    const data = await fsPromises.readFile(filePath, 'utf8');
    const arr = data.split("\n");
    return arr;

}

export default readInput