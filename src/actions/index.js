export const addProducts = (productString) => {
    return {
        type: 'ADD_PRODUCT',
        data: productString
    }
}