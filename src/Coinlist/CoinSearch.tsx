import { ChangeEvent } from "react"

const CoinSearch = ( { searchValue, setSearchValue }: any ) => {
    const handleSearchInput = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { value } = event.target
        setSearchValue( value )
    }

    return (
        <input
            className="coinlist__input"
            value={ searchValue }
            onChange={ handleSearchInput }
            placeholder="Search..."
        />
    )
}

export default CoinSearch