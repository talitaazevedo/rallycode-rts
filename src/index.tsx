import ReactDOM from "react-dom";
import EventComponent from "./event/EventComponent";
// import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return <div>
    
    {/* <GuestList></GuestList> */}
    <EventComponent/>

    </div>
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);