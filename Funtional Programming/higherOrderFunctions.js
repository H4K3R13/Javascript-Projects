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
