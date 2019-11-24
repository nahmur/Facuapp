import {FETCH_ALL_CITIES, FECTH_CITY} from '../constants';

const initialState = "";

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_CITIES: {
            return Object.assign({}, state, { citiesArray: action.cities })
        }
        case FECTH_CITY: {
            return Object.assign({}, state, { city: action.city })
        }
        default: return state
    }
}