    // First

let sum = 0;
let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function() { 
        let aSide = prompt('Set your value of side a', '');
        this.aSide = aSide;
        let bSide = prompt('Set your value of side b', '');
        this.bSide = bSide;
        let cSide = prompt('Set your value of side c', '');
        this.cSide = cSide;
    },
    getPerimeter: function() { 
        for (let key in triangle) { 
            if (triangle[key] == this.setValues) break;
            sum += parseInt(triangle[key]);
        }
        return sum;
    },
    isEqualSides: function() { 
        return this.aSide === this.bSide && this.aSide === triangle.cSide;
    },
}
triangle.setValues();
console.log(`That is the perimeter of the triangle: ${triangle.getPerimeter()}`);
console.log(`Are sides equal? ${triangle.isEqualSides()}`);

    // Second

let x;
let y;
let calculator = {
    read: function() {
        x = parseInt(prompt('Enter the first num', ''))
        y = parseInt(prompt('Enter the second num', ''))
    },
    sum: function() {
        return x + y
    },
    multi: function() {
        return x * y
    },
    diff: function() {
        return x - y
    },
    div: function() {
        return x / y
    }
}
calculator.read()
console.log(`That is the sum of your numbers: ${calculator.sum()}`)
console.log(`That is the difference of your numbers: ${calculator.diff()}`)

    // Third

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.traditions); // undefined

    // Fourth

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

// Вернёт undefined потому что перезапись произошла после console.log, а внешняя переменная 'outside' находится в другой области видимости