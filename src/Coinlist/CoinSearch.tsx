import { ChangeEvent } from "react"

type CoinSearchProps = {
    searchValue: string,
    setSearchValue: ( value: string ) => void,
}

const CoinSearch = ( { searchValue, setSearchValue }: CoinSearchProps ) => {
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