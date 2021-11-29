import useCoinlist from "./hooks/useCoinlist"
import Coin from "./types/coin"

const CoinList = () => {
    const [ { coins } ] = useCoinlist()

    return (
        <div>
            { coins.map( ( c: Coin ) => (
                <div>
                    { c.shortName }
                </div>
            ) ) }
        </div>
    )
}

export default CoinList