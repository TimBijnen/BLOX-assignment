import { useReducer, useEffect } from "react"
import axios from "axios"
import reducer from "./reducer"
import actions from "../types/actions"

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
        const interval = setInterval( loadData, 15000)
        return () => clearInterval( interval )
    }, [] )

    return [ state ]
}

export default useCoinlist