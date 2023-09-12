import './App.css';
import {User} from "./User"



function App() {
  const users = [
  {name:"Pedro", age:21},
  {name:"Jake", age:22},
  {name:"Jessica",age:23},
  {name:"Dragan",age: 24},
  ];

  return (
    <div className="App">
     
      
     {users.map((user,_) =>{
        return <User name={user.name} age={user.age}/>})}
     
      </div>
  );
}



export default App;