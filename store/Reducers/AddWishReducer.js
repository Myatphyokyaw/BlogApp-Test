const initialState = []

export const AddWishReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDWISHLIST":
            return [...state, action.payload]
        default:
            return state
    }
}
