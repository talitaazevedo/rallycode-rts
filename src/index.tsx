import ReactDOM from "react-dom";
import EventComponent from "./event/EventComponent";
// import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return <div>
    
    {/* <GuestList></GuestList> */}
    <UserSearch></UserSearch>

    </div>
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);