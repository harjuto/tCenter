import React from 'react';
import '../style/metro.less'


export default class Metro extends React.Component {
    render() {
        return (
            <h3>
                <img src={require('../images/metro_large.png')}/>
                {this.renderDepartures()}
            </h3>
        )
    }

    renderDepartures() {
        if (!this.props.metro) {
            return <span>No departures</span>
        }
        return this.props.metro.departures.map((departure) => {
                let time = departure.time.toString();
                let hour, minute;
                if (time.length == 3) {
                    hour = time.substring(0, 1);
                    minute = time.substring(1, 3)
                } else {
                    hour = time.substring(0, 2);
                    minute = time.substring(2, 4)
                }
                return <span className="text" key={departure.time}>
                        {hour}.{minute}
                </span>
            })
        }


}
//Tasta metro: http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=stop&code=1454602&dep_limit=3
//Tama: http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=route&from=2560017,6679576&to=2552409,6673699
//http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=stop&code=4285&dep_limit=5