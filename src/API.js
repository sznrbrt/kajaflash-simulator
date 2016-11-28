let API = {
  openOneOrder(orderObj, cb) {
    fetch(`http://${remoteUrl}/data/orders`, {
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
        throw {
          badCredentials: res.status === 401,
          unknowError: res.status != 401
        }
      }
    })
    .then((res) => {
      return cb(null, true);
    })
    .catch((err) => {
      console.error(err);
      return cb(err);
    })
  }
};

export default API;
