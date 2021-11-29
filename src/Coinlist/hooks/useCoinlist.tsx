import { useReducer, useEffect, useState } from "react"
import axios from "axios"
import reducer from "./reducer"
import actions from "../types/actions"
import Coin from "../types/coin"

const { REACT_APP_API_ENDPOINT: API = "" } = process.env

type Sort = {
    key: string,
    sortUp: boolean,
}

const useCoinlist = () => {
    const [ currentSort, setCurrentSort ] = useState<Sort>( { key: "", sortUp: false } )
    const [ searchValue, setSearchValue ] = useState<string>( "" )
    const [ state, dispatch ] = useReducer( reducer, { coins: [] } )

    useEffect( () => {
        async function loadData() {
            dispatch( { type: actions.LOAD } )
            try {
                const { data } = await axios.get( API )
                dispatch( { type: actions.SET_DATA, payload: data } )
            } catch ( error: any ) {
                console.error(
                    `An error occured fetching data from the API. Status code: ${ error.response.status }`
                )
            } finally {
                dispatch( { type: actions.UNLOAD } )
            }
        }
        loadData()
        const interval = setInterval( loadData, 15000)
        return () => clearInterval( interval )
    }, [] )

    const applySort = ( coins: Coin[] ) => {
        const { key, sortUp } = currentSort
        if ( key === "price" ) {
            if ( sortUp ) {
                coins = coins.sort(
                    ( a: Coin, b: Coin ) => a.price.amount > b.price.amount ? -1 : 1
                )
            } else {
                coins = coins.sort(
                    ( a: Coin, b: Coin ) => a.price.amount > b.price.amount ? 1 : -1
                )
            }
        } else if ( key === "shortName" ) {
            if ( sortUp ) {
                coins = coins.sort(
                    ( a: Coin, b: Coin ) => a.shortName > b.shortName ? -1 : 1
                )
            } else {
                coins = coins.sort(
                    ( a: Coin, b: Coin ) => a.shortName > b.shortName ? 1 : -1
                )
            }
        }
        return coins
    }

    const applyFilter = ( coins: Coin[] ) => {
        if ( searchValue !== "" ) {
            return coins.filter(
                ( coin: Coin ) =>
                    coin.shortName.toLowerCase().indexOf( searchValue ) >= 0
                    || coin.longName.toLowerCase().indexOf( searchValue ) >= 0
            )
        }
        return coins
    }
    
    const sortCoins = ( key: string, sortUp: boolean ) => {
        setCurrentSort( { key, sortUp } )
    }
    
    return [ {
        ...state,
        searchValue,
        coins: applySort( applyFilter( state.coins ) ),
    }, {
        sortCoins,
        setSearchValue
    } ]
}

export default useCoinlist