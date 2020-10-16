import React from 'react';
import { Restaurant } from "./models/Restaurant";

const App = (props: any) => {
  return <>
    {props.restaurants.map((r: Restaurant) => {
      return (<table key={r.id}>
        <tbody key={r.id}>
          <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.cuisine}</td>
            <td>{r.location}</td>
            <td>{r.deliveryTime}</td>
            <td><button onClick={(e) => props.onOrder(r.name, r.deliveryTime)}>Order</button></td>
          </tr>
        </tbody>
      </table>)
    })}
  </>
}

export default App;
