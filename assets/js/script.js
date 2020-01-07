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
        $("#mainIcon").attr('src', `http://openweathermap.org/img/w/${response.weather[0].icon}.png`)
        $("#mainIcon").attr('alt', `${response.weather[0].description}`)
        $("#currentTemp").text("Temperature: " + Math.round(response.main.temp) + " F");
        $("#currentHumid").text("Humidity: " + response.main.humidity + "%");
        $("#currentWind").text("Wind Speed: " + response.wind.speed + "MPH");
        
        var queryUrlUv = `http://api.openweathermap.org/data/2.5/uvi/forecast?`+ `appid=0cf78313188ed7c923c873cd418f1e41` + `&lat=${response.coord.lat}&lon=${response.coord.lon}&cnt=1`
        $.ajax({
            url: queryUrlUv,
            method: "GET"
        }).then(function(responseUv){
            $("#currentUv").text("UV index: " + responseUv[0].value)
        })
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