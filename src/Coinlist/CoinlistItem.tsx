import Coin from "./types/coin"
import CoinPrice from "./CoinPrice"

const CoinlistItem = ( {
    icon,
    shortName,
    longName,
    priceChangePercentage,
    price,
}: Coin ) => {
    const { amount } = price
    const displayPrice = amount.toFixed( 2 ).replace( ".", "," )

    return (
        <tr className="coinlist-tr">
            <td className="coinlist-td">
                <div className="coinlist-td__details">
                    <img
                        className="coinlist-img"
                        src={ icon }
                        alt="coin-icon"
                    />
                    <span className="coinlist--name">
                        { shortName }
                    </span>
                    <span className="coinlist--name">
                        { longName }
                    </span>
                </div>
            </td>
            <td>
                <CoinPrice value={ priceChangePercentage } />
            </td>
            <td className="coinlist--price">
                { "€ " }
                { displayPrice }
            </td>
        </tr>
    )
}

export default CoinlistItem