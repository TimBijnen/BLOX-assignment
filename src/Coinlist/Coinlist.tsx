import useCoinlist from "./hooks/useCoinlist"
import Coin from "./types/coin"
import CoinlistItem from "./CoinlistItem"

const CoinList = () => {
    const [ { coins } ] = useCoinlist()

    return (
        <div>
            <table className="coinlist-table">
                <thead>
                    <tr className="coinlist-tr">
                        <th className="coinlist-th">
                            Coin
                        </th>
                        <th className="coinlist-th">
                            Price change
                        </th>
                        <th className="coinlist-th">
                            price
                        </th>
                    </tr>
                </thead>
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