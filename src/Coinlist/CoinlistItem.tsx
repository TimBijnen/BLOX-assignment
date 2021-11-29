import Coin from "./types/coin"

const CoinlistItem = ( {
    icon,
    shortName,
    longName,
    priceChangePercentage,
    price,
}: Coin ) => {
    const { unit, amount } = price

    return (
        <tr className="coinlist-tr">
            <td className="coinlist-td">
                <img
                    className="coinlist-img"
                    src={ icon }
                    alt="coin-icon"
                />
                { shortName }
                { longName }
            </td>
            <td>
                { priceChangePercentage }
            </td>
            <td>
                { unit }
                { amount }
            </td>
        </tr>
    )
}

export default CoinlistItem