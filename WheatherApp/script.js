var inputval = document.querySelector("#cityinput")
var btn = document.querySelector("#add")
var city = document.querySelector("#cityouput")
var desc = document.querySelector("#description")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")

apik="e79d8b1ac8755872444d1be5ab4ef91f"

function convertion(val){
    return (val-273).toFixed(2)
}

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid='+apik)
    .then(res => console.log(res))
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspd = data['wind']['speed']

        city.innerHTML=`Wheather of <span>${nameval}<span>`
        city.innerHTML=`Temperature <span>${convertion(temperature)} C<span>`
        description.innerHTML=`Sky Conditon <span>${descrip}<span>`
        wind.innerHTML=`Wind <span>${wndspd}<span>`
    })
    .catch(err => alert('You Entered Wrong City Name'))
})