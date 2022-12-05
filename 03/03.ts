import readInput from "../utils/fileReader";

const main = async () => {
    const rucksacks = await readInput("../03/input.txt");
    let prioritySum = 0
    rucksacks.forEach((rucksack: string, index: number) => {
        const firstCompartiment = rucksack.slice(0, rucksack.length / 2);
        const secondCompartiment = rucksack.slice(rucksack.length / 2);

        for (let item of firstCompartiment) {
            if (secondCompartiment.includes(item)) {
                let charCode = item.charCodeAt(0);
                let itemPriority = charCode >= 97 ? charCode - 96 : charCode - 38
                prioritySum += itemPriority;
                break;
            }
        }
    });

    console.log(prioritySum);
}

main();
