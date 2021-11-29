import useCoinlist from "./hooks/useCoinlist"
import Coin from "./types/coin"
import CoinSearch from "./CoinSearch"
import CoinlistItem from "./CoinlistItem"
import CoinlistTableHeader from "./CoinlistTableHeader"

const CoinList = () => {
    const [ { coins, searchValue }, { sortCoins, setSearchValue } ] = useCoinlist()

    return (
        <div className="coinlist">
            <CoinSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />
            
            { coins.length > 0 ? (
                <table className="coinlist__table">
                    <CoinlistTableHeader sortCoins={ sortCoins } />
                    <tbody>
                        { coins.map( ( coin: Coin ) => (
                            <CoinlistItem key={ coin.shortName } { ...coin } />
                        ) ) }
                    </tbody>
                </table>
            ) : (
                `There are no coins matching the given filter '${ searchValue }'`
            ) }
        </div>
    )
}

export default CoinList