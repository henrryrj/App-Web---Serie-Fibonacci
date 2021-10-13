const fibonacci = (cantidad) => {
    var elementosFibo = [];
    var a, b, c;
    a = 0;
    b = 1;
    c = 0;
    for (var i = 1; i <= cantidad; i++) {
        elementosFibo.push(a);
        c = a + b;
        a = b;
        b = c;
    }
    return elementosFibo;
}

module.exports = { fibonacci };