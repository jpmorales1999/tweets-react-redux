const initialProps = {
    tweets: []
}

export default function(state = initialProps, action) {
    switch (action.type) {
        case "ADD_TWEET":
            return {
                ...state,
                tweets: [...state.tweets, action.payload] // Accedemos a los anteriores tweets que estan en el estado y le agregamos la action con el nuevo tweet
            }
        case "DELETE_TWEET":
            return {
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id !== action.payload) // Guardara todos los tweets que no concuerdan con el tweet a eliminar
            }
        default:
            return state
    }
}