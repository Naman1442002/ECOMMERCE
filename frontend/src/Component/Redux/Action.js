import axios from "axios";

export const Fetch_ITEMS_REQUEST='FETCH_ITEMS_REQUEST';
export const Fetch_ITEMS_SUCCESS='FETCH_ITEMS_SUCCESS';
export const Fetch_ITEMS_FAILURE='FETCH_ITEMS_FAILURE';
export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_FROM_CART='REMOVE_FROM_CART';
export const REMOVE_ALL_ITEM='REMOVE_ALL_ITEM';

const fetch_items_request= ()=>
{
    return {
        type: Fetch_ITEMS_REQUEST,
        info:'REQUEST'
    }
}

const fetch_items_success =(items)=>
{
    return {
        type : Fetch_ITEMS_SUCCESS,
        payload: items
    }
}

const fetch_items_failure=(error)=>{
    return {
        type: Fetch_ITEMS_FAILURE,
        payload:error
    }
}

export const fetchItems=()=>
{
    return (dispatch)=>{
        dispatch(fetch_items_request());
        axios.get("https://shivpalcommerce.onrender.com/products")
        .then((resp)=>{
            dispatch(fetch_items_success(resp.data))})
        .catch((err)=>{dispatch(fetch_items_failure(err.message))})
    }
}

export const add_to_cart=(item)=>{
    return{
        type:ADD_TO_CART,
        payload: item
    }
}

export const remove_from_cart=(item)=>{
    return{
        type:REMOVE_FROM_CART,
        payload: item
    }
}

export const remove_all_item=()=>{
    return{
        type:REMOVE_ALL_ITEM
    }
}