let max = 999;
let numb = {
    number: prompt('Введите число от 0 до 999'),
    units: 0,
    tens: 0,
    hundreds: 0,
};
if (numb.number <= 9){
    numb.units = numb.number;
} else if (numb.number <= 999){
    numb.units = Math.floor(numb.number % 10);
    numb.tens = Math.floor(numb.number / 10 % 10);
    numb.hundreds = Math.floor(numb.number / 100 % 10);
} else {
    numb.number = 0;
    alert('Вы ввели число за диапазоном 0 - 999');
}
alert(numb);