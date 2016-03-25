import { RECEIVE_WEATHER } from '../actions/weatherapi';
import {
  RECEIVE_ROUTES,
  RECEIVE_METRO } from '../actions/hslapi';
import { RECEIVE_QUOTE } from '../actions/quotes';
import { HYDRATE } from '../actions/common';

const initialState = {
    timetable: {
        enabled: true,
        loaded: false,
        departures: undefined,
        url: undefined,
        stops: []
    },
    weather:{
        weather:[],
        main: {}
    },
    quote: {

    }
};



export default (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_WEATHER:
            return Object.assign({}, state, {
                'weather': action.weather
            });
        case RECEIVE_ROUTES:
            return Object.assign({}, state, {
                'routes': action.routes
            });
        case RECEIVE_METRO:
            return Object.assign({}, state, {
              timetable: Object.assign({}, state.timetable, {
                loaded: true,
                departures: action.data.departures
                })
            });
        case RECEIVE_QUOTE:
            return Object.assign({}, state, {
               quote: action.quote
            });
        case HYDRATE:
            return Object.assign({}, state, {
                timetable: action.data.timetable
            });
        default:
            return state;
    }
}
