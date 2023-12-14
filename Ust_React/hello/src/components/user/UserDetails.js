import React, { Component } from 'react'

export class UserDetails extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     username:'Shafna',
        //     age:20
        // }
    }
  render() {
    //   setTimeout(()=>
    //   {
    //       this.setState({
    //           username:'Shafna K M',
    //           age:26
    //       });
    //   },5000);
    return (
    //   <div><p>Username:{this.state.username}</p>
    //   <p>age:{this.state.age}</p></div>
    <div><p>Username:{this.props.username}</p>
    <p>age:{this.props.age}</p></div>
    )
  }
}

export default UserDetails