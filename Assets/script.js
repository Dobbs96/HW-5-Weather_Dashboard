var apiKey = "eb2134244e7565b6b1125ba38666226f";

var searchBar = $("#searchBar");
var searchBtn = $("#searchBtn");

var uvLocalStorage = localStorage.getItem("UVIndex");
var cityLocalStorage = localStorage.getItem("CityName");

searchBtn.on("click", function (event) {
  $("#uvIndex").removeClass();
  event.preventDefault();
  if (cityName !== "") {
    var cityName = searchBar.val().trim();
    var apiCall =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&units=imperial&cnt=41&appid=" +
      apiKey;
    fetch(apiCall)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // //Pull needed Info
        localStorage.setItem("CityName", cityName);
        $("#previousCity").append(
          `<li class="list-group-item"> ${cityName} </li>`
        );
        // City Name
        var city = data.city.name;
        // Date
        var currentDate = new Date(data.list[0].dt * 1000).toLocaleDateString();
        $("#cityDate").text(`${city} (${currentDate})`);
        // Icon
        var icon = data.list[0].weather[0].icon;
        document.getElementById("icon").src = `./Assets/Images/${icon}.png`;
        document.getElementById("icon").alt = icon + " Icon";
        // Temp
        var temp = data.list[0].main.temp;
        $("#temp").text(`Temp: ${temp} F`);
        // Humidity
        var humid = data.list[0].main.humidity;
        $("#humidity").text(`Humidity: ${humid}%`);

        // Wind Speed
        var windSpeed = data.list[0].wind.speed;
        $("#windSpeed").text(`Wind Speed: ${windSpeed} MPH`);
        // UV Index
        // Build the url for UV Index need lon and lat
        var lt = data.city.coord.lat;
        var ln = data.city.coord.lon;

        var ucIndexUrl =
          "https://api.openweathermap.org/data/2.5/uvi?appid=" +
          apiKey +
          "&lat=" +
          lt +
          "&lon=" +
          ln;
        fetch(ucIndexUrl)
          .then(function (response2) {
            return response2.json();
          })
          .then(function (data2) {
            $("#uvIndex").text(`UV Index: ${data2.value}`);
            localStorage.setItem("UVIndex", data2.value);
            if (data2.value < 5) {
              $("#uvIndex").addClass("btn-success");
            } else if (data2.value > 7) {
              $("#uvIndex").addClass("btn-danger");
            } else {
              $("#uvIndex").addClass("btn-warning");
            }
          });
        // CREAT BUILD PLACE 5-DAY-Forecast
        // SECOND DAY!
        // Date
        var secondDate = new Date(data.list[8].dt * 1000).toLocaleDateString();
        $("#secondDayDate").text(`${secondDate}`);
        // Icon
        var secondIcon = data.list[8].weather[0].icon;
        document.getElementById(
          "icon2"
        ).src = `./Assets/Images/${secondIcon}.png`;
        document.getElementById("icon2").alt = secondIcon + " Icon";
        // Temp
        var secondTemp = data.list[8].main.temp;
        $("#secondDayTemp").text(`Temp: ${secondTemp} F`);
        // Humidity
        var secondHumid = data.list[8].main.humidity;
        $("#secondDayHumid").text(`Humidity: ${secondHumid}%`);

        // Wind Speed
        var secondWindSpeed = data.list[8].wind.speed;
        $("#secondDayWind").text(`Wind Speed: ${secondWindSpeed} MPH`);
        // THIRD DAY!
        // Date
        var thirdDate = new Date(data.list[16].dt * 1000).toLocaleDateString();
        $("#thirdDayDate").text(`${thirdDate}`);
        // Icon
        var thirdIcon = data.list[16].weather[0].icon;
        document.getElementById(
          "icon3"
        ).src = `./Assets/Images/${thirdIcon}.png`;
        document.getElementById("icon3").alt = thirdIcon + " Icon";
        // Temp
        var thirdTemp = data.list[16].main.temp;
        $("#thirdDayTemp").text(`Temp: ${thirdTemp} F`);
        // Humidity
        var thirdHumid = data.list[16].main.humidity;
        $("#thirdDayHumid").text(`Humidity: ${thirdHumid}%`);

        // Wind Speed
        var thirdWindSpeed = data.list[16].wind.speed;
        $("#thirdDayWind").text(`Wind Speed: ${thirdWindSpeed} MPH`);
        // FOURTH DAY!
        // Date
        var fourthDate = new Date(data.list[24].dt * 1000).toLocaleDateString();
        $("#fourthDayDate").text(`${fourthDate}`);
        // Icon
        var fourthIcon = data.list[24].weather[0].icon;
        document.getElementById(
          "icon4"
        ).src = `./Assets/Images/${fourthIcon}.png`;
        document.getElementById("icon4").alt = fourthIcon + " Icon";
        // Temp
        var fourthTemp = data.list[24].main.temp;
        $("#fourthDayTemp").text(`Temp: ${fourthTemp} F`);
        // Humidity
        var fourthHumid = data.list[24].main.humidity;
        $("#fourthDayHumid").text(`Humidity: ${fourthHumid}%`);

        // Wind Speed
        var fourthWindSpeed = data.list[24].wind.speed;
        $("#fourthDayWind").text(`Wind Speed: ${fourthWindSpeed} MPH`);
        // FIFTH DAY!
        // Date
        var fifthDate = new Date(data.list[32].dt * 1000).toLocaleDateString();
        $("#fifthDayDate").text(`${fifthDate}`);
        // Icon
        var fifthIcon = data.list[32].weather[0].icon;
        document.getElementById(
          "icon5"
        ).src = `./Assets/Images/${fifthIcon}.png`;
        document.getElementById("icon5").alt = fifthIcon + " Icon";
        // Temp
        var fifthTemp = data.list[32].main.temp;
        $("#fifthDayTemp").text(`Temp: ${fifthTemp} F`);
        // Humidity
        var fifthHumid = data.list[32].main.humidity;
        $("#fifthDayHumid").text(`Humidity: ${fifthHumid}%`);

        // Wind Speed
        var fifthWindSpeed = data.list[32].wind.speed;
        $("#fifthDayWind").text(`Wind Speed: ${fifthWindSpeed} MPH`);
        // SIXTH DAY!
        // Date
        var sixthDate = new Date(data.list[39].dt * 1000).toLocaleDateString();
        $("#sixthDayDate").text(`${sixthDate}`);
        // Icon
        var sixthIcon = data.list[39].weather[0].icon;
        document.getElementById(
          "icon6"
        ).src = `./Assets/Images/${sixthIcon}.png`;
        document.getElementById("icon6").alt = sixthIcon + " Icon";
        // Temp
        var sixthTemp = data.list[39].main.temp;
        $("#sixthDayTemp").text(`Temp: ${sixthTemp} F`);
        // Humidity
        var sixthHumid = data.list[39].main.humidity;
        $("#sixthDayHumid").text(`Humidity: ${sixthHumid}%`);

        // Wind Speed
        var fourthWindSpeed = data.list[39].wind.speed;
        $("#fourthDayWind").text(`Wind Speed: ${fourthWindSpeed} MPH`);
      });
  }
});
