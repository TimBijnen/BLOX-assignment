import CoinListActions from "./actions"
import CoinList from "./coins"

type CoinListAction = {
    type: CoinListActions,
    payload?: CoinList,
}

export default CoinListAction