var apiKey = "eb2134244e7565b6b1125ba38666226f";

var searchBar = $("#searchBar");
var searchBtn = $("#searchBtn");

searchBtn.on("click", function (event) {
  event.preventDefault();
  if (cityName !== "") {
    var cityName = searchBar.val().trim();
    var apiCall =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&units=imperial&appid=" +
      apiKey;
    console.log(cityName);
    console.log(apiCall);
    fetch(apiCall)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // Pull needed Info
        // City Name
        console.log("City Name: " + data.city.name);
        // Date
        var currentDate = new Date(data.list[0].dt * 1000).toLocaleDateString();
        console.log("Date: " + currentDate);
        // Icon
        console.log("Icon: " + data.list[0].weather[0].icon);
        // Temp
        console.log("Temp: " + data.list[0].main.temp);
        // Humidity
        console.log("Humidity: " + data.list[0].main.humidity);
        // Wind Speed
        console.log("Wind Speed: " + data.list[0].wind.speed);
        // UV Index
        console.log("UV Index: " + data.city.name);
      });
  }
});
