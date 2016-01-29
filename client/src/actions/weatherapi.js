
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';


export function requestWeather(){
    return {
        type: REQUEST_WEATHER
    }
}

export function fetchWeather(){
        return dispatch => {
            dispatch(requestWeather());

            return fetch('http://api.openweathermap.org/data/2.5/weather?lat=60.223082&lon=25.082842&APPID=89d4bf98e7664f5e2d7ab451da4c4d8e&units=metric')
                .then(response => response.json())
                .then(json =>
                    dispatch(receiveWeather(json))
                );
            //Error handling here.
        }

}

export function receiveWeather(weather){
    return {
        type: RECEIVE_WEATHER,
        weather: weather
    }
}