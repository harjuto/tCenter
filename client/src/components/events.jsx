import React from 'react';
import '../style/events.less'

export default class Events extends React.Component{
    render(){
        return (
            <div className="row" id="event-container">
                <div className="col-md-12">
                    <ul>
                        {this.renderEvents(this.props.events.today)}
                    </ul>
                    <ul>
                        {this.renderEvents(this.props.events.tomorrow)}
                    </ul>
                </div>
            </div>
        )
    }

    renderEvents(events){
        return events.map((event, index) =>
            <li key={index}>{event}</li>
        )
    }

}