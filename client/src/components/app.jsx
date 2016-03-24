import React from 'react';
import { connect } from 'react-redux';
import Timetable from './widgets/timetable';
import Weather from './widgets/weather';
import Calendar from './widgets/calendar';
import Grid from './grid';

import '../style/grid.less';

class App extends React.Component{
    render(){
        return (
            <div id="container">
              <div id="grid">
                <Grid />
              </div>
            </div>
        )
    }
}

export default App
