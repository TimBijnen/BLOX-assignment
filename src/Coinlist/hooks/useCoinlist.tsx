import { useReducer, useEffect } from "react"
import axios from "axios"
import reducer from "./reducer"
import actions from "../types/actions"
import Coin from "../types/coin"

const { REACT_APP_API_ENDPOINT: API = "" } = process.env

const useCoinlist = () => {
    const [ state, dispatch ] = useReducer( reducer, { coins: [] } )

    useEffect( () => {
        async function loadData() {
            dispatch( { type: actions.LOAD } )
            try {
                const { data } = await axios.get( API )
                dispatch( { type: actions.SET_DATA, payload: data } )
            } catch ( error: any ) {
                console.error( error.response.status )
            } finally {
                dispatch( { type: actions.UNLOAD } )
            }
        }
        loadData()
        const interval = setInterval( loadData, 15000)
        return () => clearInterval( interval )
    }, [] )
    
    const sortCoins = ( key: string, sortUp: boolean ) => {
        let coins
        if ( key === "price" ) {
            if ( sortUp ) {
                coins = state.coins.sort(
                    ( a: Coin, b: Coin ) => a.price.amount > b.price.amount ? -1 : 1
                )
            } else {
                coins = state.coins.sort(
                    ( a: Coin, b: Coin ) => a.price.amount > b.price.amount ? 1 : -1
                )
            }
        } else {
            if ( sortUp ) {
                coins = state.coins.sort(
                    ( a: Coin, b: Coin ) => a.shortName > b.shortName ? -1 : 1
                )
            } else {
                coins = state.coins.sort(
                    ( a: Coin, b: Coin ) => a.shortName > b.shortName ? 1 : -1
                )
            }
        }
        dispatch( { type: actions.SET_DATA, payload: coins } )
    }

    return [ state, sortCoins ]
}

export default useCoinlist