type CoinArrowProps = {
    direction: number,
}

const CoinArrow = ( { direction }: CoinArrowProps ) => {
    if ( direction > 0 ) {
        return <span>▲</span>
    } else if ( direction < 0 ) {
        return <span>▼</span>
    }
    return null
}

export default CoinArrow