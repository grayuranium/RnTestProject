import Types from '../types'

export function changeTheme(theme) {
    return{
        type:Types.CHANGE_THEME,
        theme:theme,
    }
}