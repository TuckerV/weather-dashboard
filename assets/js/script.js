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
        $("#currentWeatherCity").text(responseFive.city.name);
    })
};

function setDates(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = (month<10 ? '0' : '') + month  + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();
    $("#todaysDate").text(output);
    for (var i =0; i<5; i++){
        day++;
        output = (month<10 ? '0' : '') + month  + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();
        $(".date" + i).text(output);
    }
}

setDates();
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