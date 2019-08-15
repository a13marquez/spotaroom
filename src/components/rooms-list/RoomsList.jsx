import * as React from 'react';
import  axios from 'axios';
import { Room } from '../room';

import './rooms-list.scss'

export class RoomsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    }
  }
  
  componentDidMount() {
   this.fetchData();
  }

  fetchData() {
    axios.get('http://localhost:3000/api/homecards').then(response => {
      this.setState( { rooms: response.data })
    })
  }

  render() {
    const { rooms } = this.state;
    return (
      <div className="list-container">
        <ul>  
          {rooms.map(room => (
            <li key={room.id}>
              <Room 
              img={room.mainPhotoUrl}
              title={room.title}
              price={room.pricePerMonth}
              currency={room.currencySymbol} />        
            </li>
            ))}
        </ul>
      </div>
    )
  }
}



