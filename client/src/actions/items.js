const items = (state=[], action) => {
    switch(action.type){
        case 'ADD_ITEM':
                return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    round: action.round,
                    row: action.row,
                    col: action.col,
                }
                ]
        case 'TOGGLE_ITEM':
            return [
                ...state,
                {
                    name: action.name,
                    round: action.round,
                    row: action.row,
                    col: action.col,
                }
            ]
        case 'RESET':
            return state.map(s=>({...s, col:-1, row:-1})
                )
        default:
            return state;
    }

}

export default items;