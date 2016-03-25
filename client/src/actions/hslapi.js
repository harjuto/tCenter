
export const REQUEST_ROUTES = 'REQUEST_ROUTES';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

export const REQUEST_METRO = 'REQUEST_METRO';
export const RECEIVE_METRO = 'RECEIVE_METRO';

export function requestRoutes(){
    return {
        type: REQUEST_ROUTES
    }
}

export function fetchRoutes(url){
    return dispatch => {
        dispatch(requestRoutes());

        return fetch(url)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveRoutes(json))
            );
        //Error handling here.
    }

}

export function receiveRoutes(routes){
    return {
        type: RECEIVE_ROUTES,
        routes: routes
    }
}

export function requestMetro(){
    return {
        type: REQUEST_METRO
    }
}

export function fetchMetro(){
    return dispatch => {
        dispatch(requestMetro());

        return fetch('http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=stop&code=1454602&dep_limit=3')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveMetro(json))
            );
    }
}

export function receiveMetro(metro){
    return {
        type: RECEIVE_METRO,
        data: metro[0]
    }
}
//Mine 'http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=stop&code=4285&dep_limit=5'