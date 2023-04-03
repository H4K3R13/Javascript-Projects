const item = new Map([
    [1, { name : 'gopika', age : 22}],
    [2, { name : 'amal', age: 23}]
]);

console.log(item);
console.log(item.get(2));

item.set(3,{name:'hari',age:34});
console.log(item);

console.log([...item.keys()]);
console.log([...item.values()]);

item.delete(2);

console.log(item);