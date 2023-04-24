var books =[
    { name : "Davinci Code", type : "fiction" },
    { name : "Expirement with truth", type : "autobio"},
    { name : "When breath becomes air", type : "autobio"},
    { name : "Nagas", type:"fiction"},
    { name : "Godfather", type:"fiction"}
]

//Using for loop
var name1=[]
for(var i=0;i<books.length;i++){
    if( books[i].type === "fiction"){
        name1.push(books[i].name)
    }
}

console.log(name1)

//Using Filter
var name2 = books.filter(function(book){
    return book.type === "fiction"
})

console.log(name2)

//Using variables cause in js functions are values
var isFic = function(book){
    return book.type === "fiction"
}

var name3 = books.filter(isFic)
console.log(name3)

