import React, { Component } from 'react';
import Users from './components/users';
import Messages from './components/messages';



export default class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      filter: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      filter: e.target.value
    })
  }

   contacts() {
    return[
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
    ]
  }


  //смс надо было сделать в другом файле или в этом??????

  messages() {
    return [
      {
        me: 'hello Show',
        show: 'winter is coming'
      }
    ]
  }

  render() {

    const filtered_users = this.contacts().filter((user) => {
      return user.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) != -1
    })

    const users = filtered_users.map((user) => {
        return <Users name={user.name} avatar={user.avatar} isOnline={user.isOnline} />
      })

    const messages = this.messages().map((user) => {
      return <Messages me={user.me} show={user.show} />
    })
      //нужно что б переключалось на пользователя и показывались только его смс????
      //каким образом исчезают персонажи фильтр

    return (
    <div>
      <div className="contacts">
        <ul>
          <input placeholder='input your character name' onChange={this.handleChange}/>
          {users}
        </ul>
      </div>
      <div className="messages">

        {messages}
      </div>
    </div>
    )
  }


}
