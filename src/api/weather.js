export const getWeather = async () => {
    const url = "https://api.weatherapi.com/v1/current.json?key=f1b6c29e09424197ad4105031252004&q=Chennai";
    const response = await fetch(url);
    const data = await response.json();
    return data;
};