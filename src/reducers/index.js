// Index Reducer se encargará de englobar todos los reducers que se van creando en la aplicación

import { combineReducers } from 'redux' // Combina Reducers

// Importación de mis Reducers
import modalsReducer from './modalsReducer'
import validationsReducer from './validationsReducer'
import tweetsReducer from './tweetsReducer'

// Combino reducers como un objeto
export default combineReducers({
    modals: modalsReducer,
    validations: validationsReducer,
    tweets: tweetsReducer
})