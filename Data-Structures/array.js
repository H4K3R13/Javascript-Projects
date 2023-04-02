const num = [1,2,3];
const str = Array.from('Time');

num.push('6');  
num.push('10','11');
console.log(num);

str.unshift('t');

console.log(str);
console.log(num.length);
console.log(num.length - 1);
console.log(str[2]);
console.log(str[1]);
console.log(num.slice(1,3));
console.log( num.map(n => n*2 ));
console.log(num)
console.log(num.filter( n => n%2 == 0));
console.log(num.reduce((a,n) => a +n ,0));

console.log(str.reverse());
str.reverse();
console.log(str.join('2'));