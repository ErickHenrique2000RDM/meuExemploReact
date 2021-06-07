const INITIAL_STATE = {num: 0}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'NUMBER_CHANGED':
            return { ...state, num: action.payload}

        default:
            return state
    }
}