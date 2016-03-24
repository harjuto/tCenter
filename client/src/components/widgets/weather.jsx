import React from 'react';
import '../../style/weather.less'
import {fetchWeather} from '../../actions/weatherapi';

export default class Weather extends React.Component{

    componentDidMount() {
      this.props.dispatch(fetchWeather());
    }

    render(){
      let weather = this.props.state.weather;
      console.info(weather)
        return (
            <div id="weather-container">
              <div className="weather-display">

                  {this.renderDescriptions(weather.weather)}

                <div className="value">
                  {Math.round(weather.main.temp)}&#8451;
                </div>

              </div>
            </div>
        )
    }

    renderDescriptions(weather){
        return weather.map((info) =>
          <div className="description">
            <img src={"http://openweathermap.org/img/w/" + info.icon + ".png"} />
            {info.description}
          </div>
        )
    }
}
//60.223082, 25.082842
//rautis 60.171386, 24.944087
//http://api.openweathermap.org/data/2.5/weather?lat=60.223082&lon=25.082842&APPID=89d4bf98e7664f5e2d7ab451da4c4d8e