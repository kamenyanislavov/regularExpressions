function matchName(text) {

    const regex = /(?<firstName>\b[A-Z][a-z]+) (?<secondName>[A-Z][a-z]+)/g;
    const validNames = [];
    let validName;

    while ((validName = regex.exec(text)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(" "));

}

matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");