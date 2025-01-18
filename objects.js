function sumNumericFields(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

function sortedNumericFieldNames(obj) {
    const numericFields = [];
    
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            numericFields.push({ name: key, value: obj[key] });
        }
    }
    
    numericFields.sort((a, b) => b.value - a.value);

    return numericFields.map(field => field.name);
}
