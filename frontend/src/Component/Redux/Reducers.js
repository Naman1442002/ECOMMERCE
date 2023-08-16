import { Fetch_ITEMS_FAILURE,Fetch_ITEMS_REQUEST,Fetch_ITEMS_SUCCESS , ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_ITEM } from "./Action"
import { combineReducers } from "redux"

const itemState ={
    loading:false,
    items:[],
    err:''
}

const cartItemState ={
    cartItem:[],
    err:''
}

export const ProductItemReducer=(state=itemState,action)=>
{
    switch(action.type){
        case Fetch_ITEMS_REQUEST : return {
            ...state,
            loading:true
        }
        case Fetch_ITEMS_SUCCESS : return {
            loading:false,
            items:action.payload,
            err:''
        }
        case Fetch_ITEMS_FAILURE: return{
            loading:false,
            items:[],
            err:action.payload
        }
        default:
            return state; // Return the default state to handle other actions
    }
}

export const CartItemReducer=(state=cartItemState, action)=>
{
    switch(action.type){
        case ADD_TO_CART : 
            return{
                ...state,
                cartItem:[...state.cartItem, action.payload ]
            } 
        case REMOVE_FROM_CART :
            const updatedCart = state.cartItem.filter(item => item.title != action.payload);

            return{
                cartItem:updatedCart
            }
        case REMOVE_ALL_ITEM :
            return{
                ...state,
                cartItem:[]
            }
            default:
               return state; // Return the default state to handle other actions
    }
}

export const rootReducer=combineReducers({
    Product : ProductItemReducer,
    Cart : CartItemReducer
})