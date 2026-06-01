// Panggil API key dari config
const apiKey = config.API_KEY;

// APIurl dasar (Ditambah &lang=id biar deskripsinya Bahasa Indonesia)
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=id";

// Tangkap elemen HTML
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon');

// async function untuk fetch data cuaca
async function checkweather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data); // Buat mantau data di console

    // Tempel data ke bagian kiri & kanan
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.description').innerHTML = data.weather[0].description;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    // Update Gambar Ikon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

searchButton.addEventListener('click', () => {
    checkweather(searchInput.value);
});