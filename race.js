function race(input) {

    const namePattern = /(?<name>[A-Za-z])/g
    const digitsPattern = /(?<digits>[0-9])/g
    const listOfRacers = input.shift().split(", ");
    const racers = {};

    for (let name of listOfRacers) {
        racers[name] = 0;
    }

    let currentLine = input.shift();

    while (currentLine !== "end of race") {

        let validName = currentLine.match(namePattern).join("");
        let digitsArr = currentLine.match(digitsPattern);
        let distance = 0;
        digitsArr.forEach(el => {
            distance += Number(el);
        })

        // if (validName in racers) {
        //     racers[validName] += distance;
        // }

        if (Object.keys(racers).includes(validName)) {
            racers[validName] += distance;
        }

        // if (racers.hasOwnProperty(validName)) {
        //     racers[validName] += distance;
        // }


        currentLine = input.shift();
    }
    let sortable = Object.entries(racers);
    sortable.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortable[0][0]}`);
    console.log(`2nd place: ${sortable[1][0]}`);
    console.log(`3rd place: ${sortable[2][0]}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
console.log("------------------");
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);