import { useReducer, useEffect } from "react"
import axios from "axios"
import reducer from "./reducer"
import actions from "./actions"

const { REACT_APP_API_ENDPOINT: API = "" } = process.env

const useCoinlist = () => {
    const [ state, dispatch ] = useReducer( reducer, { coins: [] } )

    useEffect( () => {
        async function loadData() {
            dispatch( { type: actions.LOAD } )
            const { data } = await axios.get( API )
            dispatch( { type: actions.SET_DATA, data } )
        }
        loadData()
    }, [] )

    return [ state ]
}

export default useCoinlist