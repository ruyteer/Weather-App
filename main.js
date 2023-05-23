const contain = document.querySelector(".contain");
const searchButton = document.querySelector(".search button");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const city = document.querySelector(".city");
const form = document.getElementById("search");
const img = document.querySelector("#result img");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const APIKey = "d8dd575591c1d4e32fe64b148fd5941f";
  const cityInput = document.getElementById("inputSearch").value;

  var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${APIKey}&lang=pt`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Aqui você pode processar os dados retornados pela API
      var temperatura = data.main.temp;
      var descricao = data.weather[0].description;

      city.textContent = `${cityInput}`;
      temperature.textContent = `${temperatura}°C`;
      description.textContent = `${descricao}`;
    })
    .catch((error) => {
      // Trate possíveis erros de requisição
      console.log(error);
    });

  contain.style.height = "50%";
  contain.style.transition = "300ms";
  img.style.opacity = "100%";
});
