import Types from '../../actions/types'

const initialState = {
    theme: 'blue',
}

export default function(state=initialState, action) {
    switch (action.type) {
        case Types.CHANGE_THEME: {
            return {
                ...state,
                theme:action.theme,
            }
        }
        default:
            return state;
    }
}