const container = document.querySelector('.container');
const search = document.querySelector('.bx-search');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
	
	const APIKey = '323a72911201710a1934fec01bbdf06e';
	const city = document.querySelector('.search-box input').value+",IN";
	 
	if (city == '')
		return;
	 
		
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}$unit=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
	 
	console.log(json)	
	var k= json.message
	if(k=="city not found"){
		alert("Invalid City Name");
		return;
	}

	const image = document.querySelector('.weather-box img');
	const temperature = document.querySelector('.weather-box .temperature');
	const description = document.querySelector('.weather-box .description');
	const humidity = document.querySelector('.weather-details .humidity span');
	const wind = document.querySelector('.weather-details .wind span');

	 
		container.style.height = '555px';
		container.classList.add('active');
		weatherBox.classList.add('active');
		weatherDetails.classList.add('active');
	 

		setTimeout(() => {
			container.classList.remove('active');
		},2500);

		switch (json.weather[0].main){
			case 'Clear':
				image.src = 'images/clear.png';
				break;
	
			case 'Rain':
				image.src = 'images/rain.png';
				break;
	
			case 'Snow':
				image.src = 'images/snow.png';
					break;
	
			case 'Clouds':
				image.src = 'images/cloud.png';
				break;
	
			case 'Mist':
				image.src = 'images/mist.png';
				break;
	
			case 'Haze':
				image.src = 'images/mist.png';
				break;
	
			default:
				image.src = 'images/cloud.png';
		}
	
		temperature.innerHTML = `${parseInt(json.main.temp)-273}<span>℃</span>`;
		description.innerHTML = `${json.weather[0].description}`;
		humidity.innerHTML = `${json.main.humidity}%`;
		wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
	}

	);

});