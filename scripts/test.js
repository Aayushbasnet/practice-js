const cityForm = document.querySelector('.change_location');
const card = document.querySelector('.card');
const weather_details = document.querySelector('.weather_details');
const weather_icon = document.querySelector('.weather_icon img');
const city_time = document.querySelector('img.city_time');
 
// update ui
const updateUi = (data) =>{
    console.log(data);
    const {cityDetails, weather} = data;

    //update details template
    weather_details.innerHTML = 
        `
            <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
            </div>  
        `;
    
    //display and hide card
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //update day and night images
    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = "images/day.svg";
    }else{
        timeSrc = "images/night.svg";
    }
    city_time.setAttribute('src', timeSrc);

    //update weather icons
    let icon_no = weather.WeatherIcon;
    let iconSrc = `images/icons/${icon_no}.svg`;
    weather_icon.setAttribute('src', iconSrc);

};

//update city
const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };

};

cityForm.addEventListener('submit', e => {
    //to prevent reloading 
    e.preventDefault();
    
    //get input city name 
    const city = cityForm.city.value.trim();

    //reset input
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
        .then(data => {
            updateUi(data);
        })
        .catch(err => {
            console.log(err);
        });
});