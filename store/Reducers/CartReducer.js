const initialState = []

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOPRODUCT":

            return [...state, action.payload]

        case "INCREASEQTY":

        function increase() {
            state[state.findIndex((el) => el.id === action.id)].qty = state[state.findIndex((el) => el.id === action.id)].qty + 1
        }

            increase()
            return [...state]
        case "DECREASEQTY":

        function decrease() {
            state[state.findIndex((el) => el.id === action.id)].qty = state[state.findIndex((el) => el.id === action.id)].qty - 1
        }

            decrease()
            return [...state]
        case "DELETEITEM":

        function deleteItem() {
            let test = state.filter(el => {
                return el.id !== action.id
            })
            return test
        }

            return deleteItem()
        case "CONVERTCART":

        function wishList() {
            state[state.findIndex((el) => el.id === action.id)].wishList = false
        }
            wishList()
            return [...state]
        function deleteWishList() {
            let data = state.filter(el => {
                return el.id !== action.id
            })
            return data
        }

            return test
        case "ALLDELETEITEM":
            return initialState
        default:
            return state
    }
}


