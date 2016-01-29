import { RECEIVE_WEATHER } from '../actions/weatherapi';
import { RECEIVE_ROUTES, RECEIVE_METRO } from '../actions/hslapi';

const initialState = {
    metro:undefined,
    weather:{
        weather:[],
        main: {}
    },
    events:{
        today: ['Go to wine tasting', 'Visit WWWeeklies'],
        tomorrow: ['Netflix and chill']
    },
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
                'metro': action.metro
            });
        default:
            return state;
    }
}
