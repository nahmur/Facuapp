import { FETCH_ALL_CITIES, FECTH_CITY } from '../constants';

const fetchAllCities = (cities) => {
    return {
        type: FETCH_ALL_CITIES,
        cities
    }
};

export const fetchCity = (city) => {
    return {
        type: FECTH_CITY,
        city
    }
};

export const getAllTheCities = () => dispatch => {
    return fetch("http://localhost:5000/api/cities")
        .then(response => response.json())
        .then(response =>
            dispatch(fetchAllCities(response))
        )
        .catch(err => console.log(err));
}

export const getCity = (id) => dispatch => {
    return fetch("http://localhost:5000/api/cities/" + id)
        .then(response => response.json())
        .then(response => dispatch(fetchCity(response)))
        .catch(err => console.log(err));
}