function Weather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}&units=${units}`
  )
    .then(response => response.json())
    .then(data => info(data))
    .catch(err => console.log(err))
}

Weather('kathmandu')

document.getElementById('w-search').addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    let city = document.getElementById('w-search').value
    Weather(city)
  }
})

function info(data) {
  const weather = data.weather
  let desc = weather[0].main
  let location = data.name + ' , ' + data.sys.country
  let humidity = data.main.humidity
  let temperatue = data.main.temp
  let wind = data.wind.speed
  let pressure = data.main.pressure
  let icon = weather[0].icon
  let description = weather[0].description

  document.getElementById('w-desc').innerText = desc
  document.getElementById('w-location').innerText = location
  document.getElementById('w-string').innerHTML = temperatue + '&deg; C'
  document.getElementById('w-humidity').innerText =
    'Humidity : ' + humidity + ' %'
  document.getElementById('w-wind').innerText = 'Wind : ' + wind + ' m/s'
  document.getElementById('w-pressure').innerText =
    'Pressure : ' + pressure + ' hPa'
  document.getElementById('w-description').innerText =
    'Condition: ' + description
  document
    .getElementById('w-icon')
    .setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
}
