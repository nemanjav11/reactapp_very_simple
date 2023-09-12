
import './App.css';



function App() {

  return (
    <div className="App">
      <div class='row container-fluid justify-content-around bg-primary'>
        <div class='col-4'>
      <User name="Pedro" age ={21} email="pedro@pedro.com"/>
        </div>
        <div class='col-4'>
      <Job salary={8000} position='Leader' company='Netflix'/>
      </div>
      <div class='container'>
      <User name="John" age ={24} email="pedro1@pedro.com"/>
      <User name="Bill" age ={28} email="pedro2@pedro.com"/>
      </div>
      </div>
    </div>
  );
}

const props = {
  name : "Pedro",
  age : 21,
  email : "pedro@pedro.com",
}



const User = (props) => {
  return (
  <div>
  <h1>{props.name}</h1>
  <h2>{props.age}</h2>
  <h2>{props.email}</h2>

  </div>
  );
};

const props_job= {
  salary: String,
  position:String,
  company:String,
}

const Job = (props_job) => {
  return (
      <div>
          <h1> {props_job.salary}</h1>
          <h1> {props_job.position}</h1>
          <h1> {props_job.company}</h1>
      </div>
  )
}
export default App;
