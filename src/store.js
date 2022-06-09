// Un store es un objeto que mantiene el árbol de estado de la aplicación. Solo debe haber un único store en una aplicación de Redux, ya que la composición ocurre en los reducers

// IMPORTANTE Cuando se trabaja con redux va a controlar el estado global de la aplicación es decir (Estados entre componentes) pero cuando se habla de estados locales como obtención de data del formulario entre otros. Se sigue utilizando el useState.

import { createStore } from 'redux'

// Añadir reducers a nuestro store

import reducer from './reducers'

// Utils
import {
    getStateLocalStorage,
    setStateLocalStorage
} from "./utils/localStorage";

const localStorageState = getStateLocalStorage();

const store = createStore(
    // Asignamos los reducers a nuestro store
    reducer,
    // De esta forma se podrá recuperar los datos que están en el storage desde el store para tenerlo disponible en cada sección de la web 
    localStorageState,
    // Parámetros para trabajar con Redux DevTools (Extensión del Navegador)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Subscribe me permite antes de cargar el store realizar cualquier tipo de acción en este caso obtener todos los Tweets del Storage
store.subscribe(() => {
    setStateLocalStorage({
        // GetState permite seleccionar los estados actuales
        tweets: store.getState().tweets
    });
});

export default store