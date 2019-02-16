export async function getWeatherInfoFromApi(cityCode) { //To get the weather info call the following API method;
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&APPID=0d3228a936b7d7ef043738a34ab41257`,
      );
      let responseJson = await response.json(); 
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  } 
  






 