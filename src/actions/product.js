export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const saveProduct = (id, product) => ({
    type: SAVE_PRODUCT,
    product,
    id
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    id
});
