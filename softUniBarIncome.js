function salesAndIncome(input) {

    let validSalePattern = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*<(?<productName>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/;
    let totalSum = 0;

    let currentLine = input.shift();

    while (currentLine !== 'end of shift') {

        let match = currentLine.match(validSalePattern);

        if (match) {
           
            let customer = match.groups.customerName;
            let product = match.groups.productName;
            let totalProductPrice = Number(match.groups.quantity) * Number(match.groups.price);

            totalSum += totalProductPrice;

            console.log(`${customer}: ${product} - ${totalProductPrice.toFixed(2)}`);
        }
        

        currentLine = input.shift();
    }

    console.log(`Total income: ${totalSum.toFixed(2)} `);

}

salesAndIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log("-----------------");
salesAndIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);