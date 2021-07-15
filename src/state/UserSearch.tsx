import { useState } from "react";


const users =[
  {name: 'Rachel', age: 30},
  {name: 'Bill', age: 32},
  {name: 'Dina', age: 56},
  {name: 'Pami', age: 28},

];
const UserSearch:React.FC =()=>{
  const [name, setName] = useState('') ;
  const onClick = ()=>{};

  return <div><h3>User Search</h3>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    <button onClick={onClick}>Search</button> 
  </div>
}

export default UserSearch;