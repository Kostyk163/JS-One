//1
var a = 1, b = 1, c, d;
c = ++a; alert(c);            // c = 1+1 = 2
d = b++; alert(d);            // d = 0+1 = 1
c = (2 + ++a); alert(c);      // c = 2+(1+2) = 5
d = (2 + b++); alert(d);      // d = 2+(1+1) = 4
alert(a);                     // 3 - последний раз на 4 строке а было равно 3
alert(b);                     // 3 - ?


//2
var y = 2;
var x = 1 + (y *= 2); // 5
alert('x = ' + x);


//3
let numb1 = prompt('Введите numb1');
let numb2 = prompt('Введите numb2');

if (numb1 >= 0 && numb2 >= 0) {
    sum = numb1 - numb2;
} else if (numb1 < 0 && numb2 < 0) {
    sum = numb1 * numb2;
} else {
    sum = numb1 + numb2;
}

alert(sum);


//4
let n = prompt('Введите от 1 до 15');

switch (n) {
    case 1:
        alert(n);
    case 2:
        alert(n);
    case 3:
        alert(n);
    case 4:
        alert(n);
    case 5:
        alert(n);
    case 6:
        alert(n);
    case 7:
        alert(n);
    case 8:
        alert(n);
    case 9:
        alert(n);
    case 10:
        alert(n);
    case 11:
        alert(n);
    case 12:
        alert(n);
    case 13:
        alert(n);
    case 14:
        alert(n);
    case 15:
        alert(n);
}

//5
let q = prompt('Введите число');
let w = prompt('Введите число');

function addition (q, w) {
    return q+w;
}
function subtraction (q, w) {
    return q-w;
}
function multiplication (q, w) {
    return q*w;
}
function division (q, w) {
    return q/w;
}

alert(addition);
alert(subtraction);
alert(multiplication);
alert(division);

//6

let arg1 = prompt('Введите первый аргумент')
let arg2 = prompt('Введите второй аргумент')
let operation = prompt('Enter operation(сложение, вычитание, умножение, деление)')

function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
    }
}