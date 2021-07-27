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
      });
  }
});
