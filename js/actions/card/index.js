import Types from '../types'

export function addToCard(product,quantity,unitcost) {
    return{
        type:Types.ADD_TO_CARD,
        payload:{product,quantity,unitcost},
    }
}

export function deleteFromCart(product) {
    return {
        type: Types.DELETE_FORM_CARD,
        payload: {
            product
        }
    }
}