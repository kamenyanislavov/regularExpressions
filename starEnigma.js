function messageDecryption(input) {

    let n = Number(input[0]);
    const keyBase = ['s', 't', 'a', 'r'];
    let key = 0;
    const regex = /[@](?<planetName>[A-z]+)([^@\-:>])?[:](?<population>\d+)\2?[!](?<attackType>[AD])[!]\2?->(?<soldierCount>\d+)/g
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 1; i <= n; i++) {

        let currentMessage = input[i];
        let decryptedMessageAsArray = [];
        let decryptedMessage = '';

        //calculate the key
        for (let j = 0; j < currentMessage.length; j++) {

            if (keyBase.includes(currentMessage[j].toLowerCase())) {

                key += 1;

            }

        }

        //decrypt the message
        for (let l = 0; l < currentMessage.length; l++) {

            let currentCharCode = currentMessage[l].charCodeAt() - key;
            let char = String.fromCharCode(currentCharCode);

            decryptedMessageAsArray.push(char);
            decryptedMessage = decryptedMessageAsArray.join('');

        }


        let array = [];

        while ((array = regex.exec(decryptedMessage)) !== null) {

            if (array.groups.attackType == 'A') {
                attackedPlanets.push(array.groups.planetName)
            } else if (array.groups.attackType == 'D') {
                destroyedPlanets.push(array.groups.planetName);
            }

        }


        key = 0;
    }

    //sort both arrays with planet names
    attackedPlanets.sort();
    destroyedPlanets.sort();


    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(element => console.log(`-> ${element}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(element => console.log(`-> ${element}`));

}

messageDecryption([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
console.log('-------------------------');
messageDecryption([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);


// PQ@Alderaa1:30000!A!->20000
// @Cantonica:3000!D!->4000NM
//-----------------------------------
// pp$##@Coruscant:200000000!D!->5000
// @Jakuu:200000!A!MMMM
// @Cantonica:3000!D!->4000MN