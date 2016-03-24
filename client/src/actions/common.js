export const START_HYDRATE = 'START_HYDRATE';
export const HYDRATE = 'HYDRATE';
import Fixtures from '../fixtures';

export function startHydrate(){
  return dispatch => {
    setTimeout( ()=>{
      dispatch(hydrate(Fixtures))
    }, 1000);

  }
}


export function hydrate(data){
  return {
    type: HYDRATE,
    data: data
  }
}


