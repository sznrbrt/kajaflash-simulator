import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../constants/ActionTypes";
import {EventEmitter} from "events";

let _openOrders = null;

class OpenOrderStore extends EventEmitter {
  constructor(props) {
    super(props);
      AppDispatcher.register(action => {
          switch(action.actionType) {
            case ActionTypes.RECEIVE_OPENORDERS:
                _openOrders = action.orderData;
                this.emit("change");
                break;
            default:
                break;
          }
      })
    }

  getOpenOrders() {
    return _openOrders;
  }

  startListening(cb) {
    this.on('change', cb)
  }

  stopListening(cb) {
    this.removeListener('change', cb)
  }
}

export default new OpenOrderStore();
