import { Reducer } from "react"
import actions from "../types/actions"
import CoinList from "../types/coins"
import CoinListAction from "../types/action"

const reducer: Reducer<CoinList|any, CoinListAction> = (
    state: CoinList,
    action: CoinListAction,
) => {
    const { type, payload } = action

    switch ( type ) {
        case actions.LOAD:
            return { ...state, isLoading: true }
        case actions.UNLOAD:
            return { ...state, isLoading: false }
        case actions.SET_DATA:
            return { ...state, coins: payload, isLoading: false }
        default:
            console.error("Unknown action", type)
            return state
    }
}

export default reducer