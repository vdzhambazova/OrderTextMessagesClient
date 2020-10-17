import React from 'react';
import ReactDOM from 'react-dom';
import Restaurants from './Restaurants';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

var apiUrlGetRestaurants = "http://localhost:8080/restaurants";

axios.get(apiUrlGetRestaurants).then((response) => {
  const restaurants = response.data;

  ReactDOM.render(
    <React.StrictMode>
      <Restaurants restaurants={restaurants} onOrder={order} />
    </React.StrictMode>,
    document.getElementById('root')
  );

  serviceWorker.unregister();
});

var apiUrlPostOrder = "http://localhost:8080/messages";

function order(name: string, deliveryTime: string) {
  axios.post(apiUrlPostOrder, {
    RestaurantName: name,
    DeliveryTime: deliveryTime,
    CustomerPhoneNumber: "359886099277"
  }, {
    headers : {
        'Content-Type' : 'application/json'
    }}).then(function (response) {
    console.log(response);
  })
}