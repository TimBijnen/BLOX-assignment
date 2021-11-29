import Price from "./price"

type Coin = {
    shortName: string,
    longName: string,
    priceChangePercentage: number,
    price: Price,
    icon: string,
}

export default Coin