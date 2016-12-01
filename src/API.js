import ServerActions from './actions/ServerActions';

let API = {
  openOneOrder(orderObj, cb) {
    fetch(`http://localhost:1515/data/orders`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderObj)
    })
    .then((res) => {
      if(res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        throw new Error ({
          badCredentials: res.status === 401,
          unknowError: res.status !== 401
        })
      }
    })
    .then((res) => {
      return cb(null, true);
    })
    .catch((err) => {
      console.error(err);
      return cb(err);
    })
  },
  getOpenOrders(cb) {
    fetch(`http://localhost:1515/data/orders`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      if(res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        throw new Error ({
          badCredentials: res.status === 401,
          unknowError: res.status !== 401
        })
      }
    })
    .then((res) => {
      ServerActions.receiveOpenOrders(res);
      return cb ? cb(null, true) : null;
    })
    .catch((err) => {
      console.error(err);
      return cb ? cb(err) : null;
    })
  }
};

export default API;
