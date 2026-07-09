
const locationInputElement = document.querySelector('#location');
const submitInputElement = document.querySelector('#submit');
const forecastDivElement = document.querySelector('#forecast');
const currentDivElement = document.querySelector('#current');
const upcomingDivElement = document.querySelector('#upcoming');


function attachEvents() {
    submitInputElement.addEventListener('click', handleWeatherReport);
}


const symbolsMap = {
    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
    'Degrees': '&#176;'
}


async function handleWeatherReport() {

    try {
        const allLocationsResponse = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const allLocationsData = await allLocationsResponse.json();

        const search = locationInputElement.value.trim();
        const locationObject = allLocationsData.find(location => location.name === search);

        const currentConditionsResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationObject.code}`);
        const currentConditionsData = await currentConditionsResponse.json();

        const threeDayForecastResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationObject.code}`);
        const threeDayForecastData = await threeDayForecastResponse.json();

        loadCurrentForecast();
        loadThreeDayForecast();


        function loadCurrentForecast() {
            const forecastsDivElement = document.createElement('div');
            forecastsDivElement.classList.add('forecasts');

            const symbolSpanElement = document.createElement('span');
            symbolSpanElement.classList.add('condition', 'symbol');
            symbolSpanElement.innerHTML = symbolsMap[currentConditionsData.forecast.condition];


            const conditionSpanElement = document.createElement('span');
            conditionSpanElement.classList.add('condition');

            const fullLocationSpanElement = document.createElement('span');
            fullLocationSpanElement.classList.add('forecast-data');
            fullLocationSpanElement.textContent = currentConditionsData.name;

            const degreesSpanElement = document.createElement('span');
            degreesSpanElement.classList.add('forecast-data');
            degreesSpanElement.innerHTML = `${currentConditionsData.forecast.low}${symbolsMap.Degrees}/${currentConditionsData.forecast.high}${symbolsMap.Degrees}`;

            const descriptionSpanElement = document.createElement('span');
            descriptionSpanElement.classList.add('forecast-data');
            descriptionSpanElement.textContent = currentConditionsData.forecast.condition;


            conditionSpanElement.appendChild(fullLocationSpanElement);
            conditionSpanElement.appendChild(degreesSpanElement);
            conditionSpanElement.appendChild(descriptionSpanElement);


            forecastsDivElement.appendChild(symbolSpanElement);
            forecastsDivElement.appendChild(conditionSpanElement);

            currentDivElement.appendChild(forecastsDivElement);
        }

        function loadThreeDayForecast() {

            const forecastInfoDivElement = document.createElement('forecast-info');
            forecastInfoDivElement.classList.add('forecast-info');

            for (const { condition, high, low } of threeDayForecastData.forecast) {

                const upcomingSpanElement = document.createElement('span');
                upcomingSpanElement.classList.add('upcoming');

                const symbolSpanElement = document.createElement('span');
                symbolSpanElement.classList.add('symbol');
                symbolSpanElement.innerHTML = symbolsMap[condition];

                const degreesSpanElement = document.createElement('span');
                degreesSpanElement.classList.add('forecast-data');
                degreesSpanElement.innerHTML = `${low}${symbolsMap.Degrees}/${high}${symbolsMap.Degrees}`;

                const conditionSpanElement = document.createElement('span');
                conditionSpanElement.classList.add('forecast-data');
                conditionSpanElement.textContent = condition;


                upcomingSpanElement.appendChild(symbolSpanElement);
                upcomingSpanElement.appendChild(degreesSpanElement);
                upcomingSpanElement.appendChild(conditionSpanElement);


                forecastInfoDivElement.appendChild(upcomingSpanElement);
                upcomingDivElement.appendChild(forecastInfoDivElement);
            }

        }


    } catch {
        forecastDivElement.textContent = 'Error';
    }

    forecastDivElement.style.display = 'block';
}

attachEvents();