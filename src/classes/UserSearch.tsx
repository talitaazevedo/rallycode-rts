import {Component} from 'react';

interface User {
  name: string;
  age:number;
}
interface UserSearchProps {
  users:{
    name: string;
    age: number;
  }[]
}

interface UserSearchState {
  name:string;
  user: User |undefined;
}

class UserSearch extends Component<UserSearchProps> {
  

  state= {
    name: '',
    user: undefined
  };
  onClick= ( )=> {
  
    const foundUser = this.props.users.find((user)=>{
      return user.name=== this.state.name;
    })
    this.setState({user: foundUser});
    console.log(this.state.user);

  }
  render () {
    const { name, user} = this.state;
    return (
      <div><h3>User Search</h3>
    <input type="text" value={name} onChange={(e)=> this.setState(e.target.value)} />
    <button onClick={onClick}>Search</button> 
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>
    )
  }
}

}