import { useState } from "react"
import Arrow from "./CoinArrow"

type SortProps = {
    [ key: string ]: number,
    shortName: number,
    price: number,
}

type TableHeaderProps = {
    sortCoins: ( type: string, direction: boolean ) => void
}

const CoinlistTableHeader = ( { sortCoins }: TableHeaderProps ) => {
    const [ sort, setSort ] = useState<SortProps>( { shortName: 0, price: 0 } )

    const onClickTableHeader = ( type: string ) => () => {
        const direction = ( ( sort[ type ] + 2 ) % 3 ) - 1
        setSort( { shortName: 0, price: 0, [ type ]: direction } )
        if ( direction !== 0 ) {
            sortCoins( type, direction > 0 )
        }
    }

    return (
        <thead>
            <tr className="coinlist__tr">
                <th
                    className="coinlist__th"
                    onClick={ onClickTableHeader( "shortName" ) }
                >
                    <span className={
                        sort.shortName !== 0
                        ? "coinlist__th--active-sort"
                        : ""
                    }>
                        Coin
                    </span>
                    <Arrow direction={ sort.shortName } />
                </th>
                <th className="coinlist__th">
                    Price change
                </th>
                <th
                    className="coinlist__th"
                    onClick={ onClickTableHeader( "price" ) }
                    >
                    <span className={
                        sort.price !== 0
                        ? "coinlist__th--active-sort"
                        : ""
                    }>
                        price
                    </span>
                    <Arrow direction={ sort.price } />
                </th>
            </tr>
        </thead>
    )
}

export default CoinlistTableHeader