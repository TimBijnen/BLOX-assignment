const CoinArrow = ( { direction }: { direction: number } ) => {
    if ( direction > 0 ) {
        return <span>▲</span>
    } else if ( direction < 0 ) {
        return <span>▼</span>
    }
    return null
}

export default CoinArrow