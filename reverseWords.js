var myString = 'Привет 1   мир. Предложение номер 2.';
var splits = myString.split(/(\s+)/).map(el=>el.split('').reverse().join('')).join('');

console.log(splits);