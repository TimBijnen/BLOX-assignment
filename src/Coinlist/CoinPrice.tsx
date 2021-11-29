const CoinPrice = ( { value }: { value: number } ) => {
    const isPositive = value >= 0
    const className = `coinprice__${ isPositive ? "positive" : "negative" }`
    const arrow = isPositive ? "▲" : "▼"
    return (
        <div className={ className }>
            <span>{ arrow }</span>
            { value.toFixed( 2 ) }
            { "%" }
        </div>
    )
}

export default CoinPrice