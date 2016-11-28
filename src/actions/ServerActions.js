import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../constants/ActionTypes";

let ServerActions = {
  receiveOpenOrder(orderData) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_OPENORDERS,
      orders
    })
  }
}

export default ServerActions;
