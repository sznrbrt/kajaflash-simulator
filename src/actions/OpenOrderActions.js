import API from '../API'

const OpenOrderActions = {
  openOneOrder(orderObj) {
    API.openOneOrder(orderObj);
  },
  getOpenOrders(cb) {
    API.getOpenOrders(cb);
  }
}

export default OpenOrderActions
