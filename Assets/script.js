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
      "&units=imperial&appid=" +
      apiKey;
    fetch(apiCall)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
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
      });
  }
});
