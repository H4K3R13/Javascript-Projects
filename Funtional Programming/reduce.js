var orders = [
{ amount: 250},
{ amount: 300},
{ amount: 150},
{ amount: 200}
]

var totalAmt = orders.reduce(function(sum, order){
	console.log("hello", sum, order)
	return sum+order.amount
}, 0)

console.log(totalAmt)
