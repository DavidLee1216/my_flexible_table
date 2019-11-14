const newUser = (state=[], action) => {

    switch(action.type) {
        case 'NEW_USER_GAME':
            state = []
            return [
                ...state,
                action.name
            ]
        default:
            return state;
    }
}

export default newUser;
