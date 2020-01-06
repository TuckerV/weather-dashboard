// JAVASCRIPT
var queryUrlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=0cf78313188ed7c923c873cd418f1e41';

function currentWeather(cWU){
    $.ajax({
        url: cWU,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
};

$(".btn").on("click", function(event){
    alert("Button Pressed");

    event.preventDefault();
    var city = $('#citySearched').val().trim();
    console.log(city);

    var currentWeatherUrl = queryUrlBase + city + "&units=imperial" + apikey;
    console.log(currentWeatherUrl);
    currentWeather(currentWeatherUrl);

})