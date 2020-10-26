import { combineReducers } from 'redux';
import ProductReducer from './product';
import LoggerReducer from './logged';

const rootReducers = combineReducers({
    productReducer: ProductReducer,
    loggerReducer: LoggerReducer
})

export default rootReducers;