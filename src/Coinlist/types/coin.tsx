import Price from "./price"

type Coin = {
    [ key: string ]: string | Price | number,
    shortName: string,
    longName: string,
    priceChangePercentage: number,
    price: Price,
    icon: string,
}

export default Coin