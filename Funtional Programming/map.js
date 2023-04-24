var books =[
    { name : "Davinci Code", type : "fiction" },
    { name : "Expirement with truth", type : "autobio"},
    { name : "When breath becomes air", type : "autobio"},
    { name : "Nagas", type:"fiction"},
    { name : "Godfather", type:"fiction"}
]

var book1=[]
for(var i=0;i<books.length;i++){
    book1.push(books[i].name)
}
console.log(book1);

//using map
var book1 = books.map(function(book) {
    return book.name
})

console.log(book1);

//using map with arrow function

var book1 = books.map((book) => book.name)
console.log(book1);