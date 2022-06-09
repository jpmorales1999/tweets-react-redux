// El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado. Se llama reducer porque es el tipo de función que pasarías a Array

const initialProps = {
    stateModalAddTweet: false, // El modal estará false inicialmente, hasta que le pasemos por valor por el state
}

export default function(state = initialProps, action) {
    switch (action.type) { // Me permite establecer la acción a ejecutar según corresponda
        case "STATE_ADD_TWEET_MODAL": // Siempre debe ir el caso en mayusculas
            return {
                ...state, // Devolvera el estado 
                stateModalAddTweet: action.payload // Y lo nuevo (True o False para abrir o cerrar el modal)
            };
        default:
            return state // Si no entra en ningún caso, devolvemos el estado tal cual y como esta
    }
} // Si no recibe un estado entonces por defecto tomará el valor de initialProps y por último recibe una acción que va a disparar algo que se desee realizar