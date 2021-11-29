import actions from "./actions"

const reducer = ( state: any, { type, data }:any ) => {
    switch ( type ) {
        case actions.LOAD:
            return { ...state, isLoading: true }
        case actions.SET_DATA:
            return { ...state, coins: data, isLoading: false }
        default:
            console.error("Unknown action", type)
            return { ...state }
    }
}

export default reducer