const productReducer = (state={
    products: 'Apple'
}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return updateAndSendBack(action.data);
        default:
            return state;
    }
}

export default productReducer;

export function updateAndSendBack(data) {
    return {
        products: data
    }
}