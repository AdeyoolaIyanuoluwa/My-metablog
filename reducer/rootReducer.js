 import {combineReducers} from 'redux'
import validationReducer from '../src/features/Register/validationslice'
 export const rootReducer = combineReducers({
    validation:  validationReducer
 })