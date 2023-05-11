import {ADD_CART} from './constant'
import { REMOVE_CART } from './constant'

export function addToCart(item) {
return{
    type:ADD_CART,
    data  : item
}
}
export function removeFromCart(item) {
    return{
        type:REMOVE_CART,
        data  : item
    }
}
