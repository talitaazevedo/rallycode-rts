import { useState, useRef } from "react";


const users =[
  {name: 'Rachel', age: 30},
  {name: 'Bill', age: 32},
  {name: 'Dina', age: 56},
  {name: 'Pami', age: 28},

];
const UserSearch:React.FC =()=>{
  //Remember that this really important!! typescript don't know  if the element have anything so you need to put null like right down.
  const inputRef = useRef<HTMLInputElement | null>(null);
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
    <input ref={inputRef}type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    <button onClick={onClick}>Search</button> 
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>
}

export default UserSearch;