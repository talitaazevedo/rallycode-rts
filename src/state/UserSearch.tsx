import { useState } from "react";


const users =[
  {name: 'Rachel', age: 30},
  {name: 'Bill', age: 32},
  {name: 'Dina', age: 56},
  {name: 'Pami', age: 28},

];
const UserSearch:React.FC =()=>{
  const [name, setName] = useState('') ;
  const [user,setUser] = useState<{name:string,age:number} | undefined >();
  const onClick = ()=>{
    const foundUser = users.find((user)=>{
      return user.name=== name;
    })
    setUser(foundUser);
    console.log(user);
  };

  return <div><h3>User Search</h3>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    <button onClick={onClick}>Search</button> 
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>
}

export default UserSearch;