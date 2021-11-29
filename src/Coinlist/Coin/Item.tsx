import Coin from "../types/coin"
import CoinPercentage from "./Percentage"

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
        <tr className="coinlist__tr">
            <td className="coinlist__td">
                <div className="coin--details">
                    <img
                        className="coinlist__img"
                        src={ icon }
                        alt="coin-icon"
                    />
                    <div className="coin--name-container">
                        <span className="coin--name">
                            { shortName }
                        </span>
                        <span className="coin--name">
                            { longName }
                        </span>
                    </div>
                </div>
            </td>
            <td className="coinlist__td">
                <CoinPercentage value={ priceChangePercentage } />
            </td>
            <td className="coinlist__td coin--price">
                { "€ " }
                { displayPrice }
            </td>
        </tr>
    )
}

export default CoinlistItem