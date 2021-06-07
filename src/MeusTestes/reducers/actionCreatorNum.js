export function setNumber(e){
    return {
        type: 'NUMBER_CHANGED',
        payload: e.target.value
    }
}