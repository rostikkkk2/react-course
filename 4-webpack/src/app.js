import React, { Component } from 'react';
import Character from './components/Character';

export default class App extends Component {
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

  users() {
      return [
        {
          name: 'JOHN SNOW',
          slug: 'KLIKUHA',
          male: true,
          house: 'Targarien'
        },
        {
          name: 'Dayneris Targarien',
          slug: 'Mother of Dragons',
          male: false,
          house: 'Targarien'
        },
        {
          name: 'Tirion Lanister',
          slug: 'Karlik',
          male: true,
          house: 'Lanister'
        }
      ]
    }

  render() {
    const filtered_users = this.users().filter((user) => {
      return user.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) != -1
    })

    const parsed_users = filtered_users.map((user) => {
        return <Character name={user.name} slug={user.slug} male={user.male} house={user.house} />
      })

    return (
      <div>
        <input placeholder='input your character name' onChange={this.handleChange}/>
        {parsed_users}
      </div>
    )

  }


}
//reactjsx tabaet
