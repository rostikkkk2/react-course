import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    const contacts = [
      {
        id: 1,
        name: 'Diana',
        avatar: 'http://s018.radikal.ru/i511/1701/e1/3449a97f8140.jpg',
        isOnline: true
      },
      {
        id: 2,
        name: 'Wilson',
        avatar: 'http://s018.radikal.ru/i511/1701/e1/3449a97f8140.jpg',
        isOnline: true
      },
      {
        id: 3,
        name: 'Snow',
        avatar: 'http://s018.radikal.ru/i511/1701/e1/3449a97f8140.jpg',
        isOnline: false
      },
      {
        id: 4,
        name: 'Meshack',
        avatar: 'http://s018.radikal.ru/i511/1701/e1/3449a97f8140.jpg',
        isOnline: true
      }

    ];
    

  const users = contacts.map((el) => {
        return(
          <li className="user">
            <img src={el.avatar} className="avatar"></img>
            <div className="name"> {el.name}</div>
            <div className={el.isOnline ? 'online' : 'notOnline'}></div>
          </li>
        )
      })


    return (
    <div>
      <div className="contacts">
        <ul>
          {users}
        </ul>
      </div>
      <div className="messages">

      </div>
    </div>
    )
  }


}
