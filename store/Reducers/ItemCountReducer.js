
export const ItemCountReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return state + 1
        default:
            return state
    }
}
