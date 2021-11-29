import useCoinlist from "./hooks/useCoinlist"
import Coin from "./types/coin"

const CoinList = () => {
    const [ { coins } ] = useCoinlist()

    return (
        <div>
            <table className="coinlist-table">
                <thead>
                    <tr>
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
                    { coins.map( ( c: Coin ) => (
                        <tr>
                            { c.shortName }
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    )
}

export default CoinList