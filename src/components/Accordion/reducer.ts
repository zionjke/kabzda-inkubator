export const TOGGLE_VISIBLE = 'TOGGLE-VISIBLE'

export type ActionType = {
    type: string
}

export type StateType = {
    visible: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_VISIBLE:
            return {
                ...state,
                visible: !state.visible
            }
        default:
            return state
    }

}
