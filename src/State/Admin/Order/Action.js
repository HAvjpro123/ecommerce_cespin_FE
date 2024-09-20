
import { api } from "../../../Config/apiConfig"
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType"
import { GET_ORDER_BY_ID_FAILURE } from "../../Order/ActionType"


export const getOrders = () => {
    console.log("get all order" )
    return async (dispatch) => {
        dispatch({type: GET_ORDER_REQUEST})
        try {
             // get all order
            const response = await api.get(`/api/admin/orders/`);
            console.log("get all order", response.data)
            dispatch({type: GET_ORDER_SUCCESS, payload:response.data})
        } catch (error) {
            // báo lỗi nêu ko lấy được order
            console.log("catch error", error)
            dispatch({type: GET_ORDER_BY_ID_FAILURE, payload:error.message});
        }
    }
}

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({type: CONFIRMED_ORDER_REQUEST})
    
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        const data = response.data
        console.log("confirm order", data)
        dispatch({type: CONFIRMED_ORDER_SUCCESS, payload:data})    
    } catch (error) {
        dispatch({type: CONFIRMED_ORDER_FAILURE, payload:error.message})
    } 
}

export const shipOrder = (orderId) => {
    return async (dispatch) => {
        try {
            dispatch({type: SHIP_ORDER_REQUEST})
            const {data} = await api.put(`/api/admin/orders/${orderId}/ship`);
            console.log('shipped order', data)
            dispatch({type: SHIP_ORDER_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: SHIP_ORDER_FAILURE, payload: error.message})
        }
    }
}

export const deliveredOrder = (orderId) => async (dispatch) => {
    dispatch({type: DELIVERED_ORDER_REQUEST})

    try {
        const response = await api.put(`/api/admin/orders/${orderId}/deliver`)
        const data = response.data
        console.log("delivered order", data)
        dispatch({type: DELIVERED_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: DELIVERED_ORDER_FAILURE, payload: error.message})
    }
}

// export const cancelOrder = (orderId) => async (dispatch) => {
//     dispatch({type: CANCELED_ORDER_REQUEST })
    
//     try {
//         const response = await api.put(`/api/admin/orders/${orderId}/cancel`)
//         const data = response.data
//         dispatch({type: CANCELED_ORDER_SUCCESS, payload: data})
//     } catch (error) {
//         dispatch({type: CANCELED_ORDER_FAILURE, payload: error.message})
//     }
// }

export const deleteOrder = (orderId) => {
    return async(dispatch) => {
        dispatch({type: DELETE_ORDER_REQUEST})
        try {
            const {data} = await api.delete(`/api/admin/orders/${orderId}/delete`)
            console.log("delete order", data)
            dispatch({type: DELETE_ORDER_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: DELETE_ORDER_FAILURE, payload: error.message})
        }
    }
}


