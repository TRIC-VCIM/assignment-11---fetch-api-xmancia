weath = document.querySelector('#weath');
weatherButton = document.querySelector('#get-weather');
zipCode = document.querySelector('#zipCode');


weatherButton.addEventListener(
  'click', () => {
    fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},us&units=imperial&appid=19e005a1538e1e345999d12124968754`)
    .then(response => response.json())
    .then(data => weath.innerHTML = `
    <p> City: ${data.name} </p> 
    <p> Description: ${data.weather[0].description}
    <p> Current Temperature: ${data.main.temp} </p>
    <p> Feels Like: ${data.main.feels_like} </p>
    <p> Minimum Temperature: ${data.main.temp_min} </p>
    <p> Maximum Temperature: ${data.main.temp_max} </p>
    <p> Pressure: ${data.main.pressure} </p>
    <p> Humidity: ${data.main.humidity} </p>
    `)
    .catch(error => weath.innerHTML = `{"cod":"404","message":"city not found."}`)

    zipCode.value = '';
  });

  