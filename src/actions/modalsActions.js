// Las acciones son un bloque de información que envia datos desde tu aplicación a tu store. Son la única fuente de información para el store. Las envias al store usando store

// El state hará referencia al nuevo estado del modal
export const openCloseAddTweetModalAction = (state) => {
    return {
        type: 'STATE_ADD_TWEET_MODAL', // Relacionamos con el nombre del reducer a trabajar y su payload será el nuevo estado que tendrá nuestro reducer
        payload: state
    }
}