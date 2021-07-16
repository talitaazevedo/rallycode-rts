import React from "react";

const EventComponent: React.FC = ()=>{
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  const onDragStart = (event:React.DragEventHandler<HTMLDivElement>)=> {
    console.log(event);
  };
  return <div>
    <input type="text"onChange={onChange} />
    <div draggable onDragStart={onDragStart}> Drag Me</div>
  </div>


}

export default EventComponent;