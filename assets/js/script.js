// JAVASCRIPT
var queryUrlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
var fiveDayUrlBase = 'http://api.openweathermap.org/data/2.5/forecast?q='
var apikey = '&appid=0cf78313188ed7c923c873cd418f1e41';

function currentWeather(cWU){
    $.ajax({
        url: cWU,
        method: "GET"
    }).then(function(response){
        console.log("Current Weather: ")
        console.log(response);
    })
};

function fiveDayWeather(fDWU){
    $.ajax({
        url: fDWU,
        method: "GET"
    }).then(function(responseFive){
        console.log("Five Day Forecast: ")
        console.log(responseFive);
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

    var fiveDayWeatherUrl = fiveDayUrlBase + city + "&units=imperial" + apikey;
    console.log(fiveDayWeatherUrl);
    fiveDayWeather(fiveDayWeatherUrl);

})