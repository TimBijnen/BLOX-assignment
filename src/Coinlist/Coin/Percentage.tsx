const CoinPercentage = ( { value }: { value: number } ) => {
    const isPositive = value >= 0
    const className = `coinlist--percentage-${ isPositive ? "positive" : "negative" }`
    const arrow = isPositive ? "▲" : "▼"
    return (
        <div className={ className }>
            <span className="coinlist--arrow-small">{ arrow }</span>
            { value.toFixed( 2 ) }
            { "%" }
        </div>
    )
}

export default CoinPercentage