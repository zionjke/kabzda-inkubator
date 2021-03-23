import {reducer, StateType, TOGGLE_VISIBLE} from "./reducer";


test('visible should be true', () => {
    //data
    const state: StateType = {
        visible: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_VISIBLE})


    //expection
    expect(newState.visible).toBe(true)
})
