import './App.css';



function App() {
  const age= 17;
  const isGreen= true;

  

  return (
    <div className="App">
       
       {age>=18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
       <h1 style={{color: isGreen ? "green": "red"}}>THIS IS FOR COLORING</h1>
    
    </div>
  );
}


export default App;