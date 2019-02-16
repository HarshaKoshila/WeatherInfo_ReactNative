import {combineReducers} from 'redux';
import {cityCodeReducer} from './main';


const allReducers = combineReducers({
    cityCodes: cityCodeReducer, 
});

export default allReducers