interface ChildProps {
  color: string;
  onClick: ()=> void;

}


export const Child = ({ color, onClick }: ChildProps) => {

  return <div>{color}
    <button onClick={onClick}>Click me </button>
  </div>
}
// * Here is another way to declare functional components I prefer That
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => { return <div>{color}{children}
<button onClick={onClick}>Click me </button>
</div> }