import useCoinlist from "./hooks/useCoinlist"
import Coin from "./types/coin"
import CoinlistItem from "./CoinlistItem"
import CoinlistTableHeader from "./CoinlistTableHeader"

const CoinList = () => {
    const [ { coins }, sortCoins ] = useCoinlist()
    
    return (
        <div>

            <table className="coinlist-table">
                <CoinlistTableHeader sortCoins={ sortCoins } />
                <tbody>
                    { coins.map( ( coin: Coin ) => (
                        <CoinlistItem key={ coin.shortName } { ...coin } />
                    ) ) }
                </tbody>
            </table>
        </div>
    )
}

export default CoinList