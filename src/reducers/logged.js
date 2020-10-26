const LoggedReducer = (state=false, action) => {
    switch (action.key) {
        case 'SIGN_IN':
            return !state;
        default:
            return state
    }
}

export default LoggedReducer;