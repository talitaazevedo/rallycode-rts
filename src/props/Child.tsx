interface ChildProps {
  color: string;
}


export const Child = ({ color }: ChildProps) => {

  return <div>{color}</div>
}
// * Here is another way to declare functional components I prefer That
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => { return <div>{color}</div> }