import { ChildAsFC } from './Child';


const Parent = () => {

  return <ChildAsFC color="red" onClick={()=>{}}>
    <p>SomeThing Else</p>
  </ChildAsFC>
}

export default Parent;