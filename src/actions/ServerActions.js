import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../constants/ActionTypes";

let ServerActions = {
  receiveOpenOrders(orderData) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_OPENORDERS,
      orderData
    })
  }
}

export default ServerActions;
