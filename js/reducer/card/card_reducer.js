import Types from '../../actions/types'

const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

export default function(state=initialState, action) {
    switch (action.type) {
        case Types.ADD_TO_CARD: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }

        case Types.DELETE_FORM_CARD: {
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }

        default:
            return state;
    }
}