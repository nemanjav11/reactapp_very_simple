export const Planet = (props) => {
    
    return (
      <div>
        {props.isGas ? <h1>Gas</h1> : <h1>Not Gas</h1>} {props.name}
      </div>
      )};
      