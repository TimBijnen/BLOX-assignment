const CoinPercentage = ( { value }: { value: number } ) => {
    const isPositive = value >= 0
    const className = `coin--percentage-${ isPositive ? "positive" : "negative" }`
    const arrow = isPositive ? "▲" : "▼"
    return (
        <div className={ className }>
            <span className="coin--arrow-small">{ arrow }</span>
            { value.toFixed( 2 ) }
            { "%" }
        </div>
    )
}

export default CoinPercentage