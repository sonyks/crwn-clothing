import CardActuionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CardActuionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CardActuionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CardActuionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CardActuionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CardActuionTypes.CLEAR_CART
});

