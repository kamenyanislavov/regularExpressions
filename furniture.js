function furniture(input) {
    const validationPattern = />>(?<furnitureName>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let moneySpent = 0;
    let currentLine = input.shift();
    const boughtFurniture = [];

    while (currentLine !== "Purchase") {

        let valid = currentLine.match(validationPattern);

        if (valid) {

            let { furnitureName, price, quantity } = valid.groups;
            boughtFurniture.push(furnitureName);
            moneySpent += Number(price) * Number(quantity);

        }

        currentLine = input.shift();
    }

        console.log("Bought furniture:");
        for (let el of boughtFurniture) {
            console.log(el);
        }
        console.log(`Total money spend: ${moneySpent.toFixed(2)}`);

}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
console.log("----------------");
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
console.log("-----------------");
furniture([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);