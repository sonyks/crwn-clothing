import CardActuionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CardActuionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CardActuionTypes.ADD_ITEM,
    payload: item
});