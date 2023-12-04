let weather = {
  apiKey: "a9a969322c6a6493e72869c5ca2e164e",
  fetchWeather: function () {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=59.9342802&lon=30.3350986&lang=ru&appid="+
        this.apiKey
    )
        .then((response) => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
},
  displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      let DescriptionToUpper = description;
      document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = DescriptionToUpper[0].toUpperCase()+DescriptionToUpper.slice(1);
      document.querySelector(".temp").innerText = parseInt(temp)-273 + "°C";
      document.querySelector(".humidity").innerText =
          "Влажность: " + humidity + "%";
      document.querySelector(".wind").innerText =
          "Скорость ветра: " + speed + "км/ч";
  },
};

weather.fetchWeather();
