export default {
    cartLength(state) {
        return '购物车' + '(' + state.cartList.length + ')'
    },
    cartList(state) {
        return state.cartList
    }
}