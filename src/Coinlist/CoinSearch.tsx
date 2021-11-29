import { ChangeEvent } from "react"

const CoinSearch = ( { searchValue, setSearchValue }: any ) => {
    const handleSearchInput = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { value } = event.target
        setSearchValue( value )
    }

    return (
        <input value={ searchValue } onChange={ handleSearchInput } />
    )
}

export default CoinSearch