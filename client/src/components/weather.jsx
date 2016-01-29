import React from 'react';
import '../style/weather.less'


export default class Weather extends React.Component{

    render(){
        return (
            <div id="weather-container">
                {Math.round(this.props.weather.main.temp)}
                {this.renderDescriptions(this.props.weather.weather)}

            </div>
        )
    }

    renderDescriptions(weather){
        return weather.map((info) =>
            <span key={info.id}>
                {info.description}
                <img src={"http://openweathermap.org/img/w/" + info.icon + ".png"} />
            </span>
        )
    }
}
//60.223082, 25.082842
//rautis 60.171386, 24.944087
//http://api.openweathermap.org/data/2.5/weather?lat=60.223082&lon=25.082842&APPID=89d4bf98e7664f5e2d7ab451da4c4d8e