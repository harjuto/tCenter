import React from 'react';
import '../../style/timetable.less'
import {fetchMetro} from '../../actions/hslapi';

export default class Metro extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchMetro())
    }

    render() {
        return (
          <div id="scroll-container" style={style}>
            <div className="scroller">
              <div className="scroll-content">
                <img src={require('../../images/metro_large.png')}/>
                {this.renderDepartures()}
              </div>
            </div>
          </div>
        )
    }

    renderDepartures() {
      let timetable = this.props.state.timetable;
        if (!timetable.departures) {
            return <span>No departures</span>
        }
        return timetable.departures.map((departure) => {
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

const style = {
  position: 'relative',
  height: '50px'
};

//Tasta metro: http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=stop&code=1454602&dep_limit=3
//Tama: http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=route&from=2560017,6679576&to=2552409,6673699
//http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=stop&code=4285&dep_limit=5