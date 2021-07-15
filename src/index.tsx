import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";

const App = () => {
  return <div>
    
    <GuestList></GuestList>
    </div>
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);