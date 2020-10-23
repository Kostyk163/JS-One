var a = 1, b = 1, c, d;
c = ++a; alert(c);            // c = 1+1 = 2
d = b++; alert(d);            // d = 0+1 = 1
c = (2 + ++a); alert(c);      // c = 2+(1+2) = 5
d = (2 + b++); alert(d);      // d = 2+(1+1) = 4
alert(a);                     // 3 - последний раз на 4 строке а было равно 3
alert(b);                     // 3 - ?


var a = 2;
var x = 1 + (a *= 2); // 5
alert('x = ' + x);

let a = prompt('Введите a');
let b = prompt('Введите b');

if (a > 0 && b > 0) {
    sum = a - b;
} else if (a < 0 && b < 0) {
    sum = a * b;
} else if ((a < 0 && b > 0) && (a > 0 && b <0)) {
    sum = a + b;
}

alert(sum);

