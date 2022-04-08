
import './App.css';
import Home from './Home';
import ClassComponent from './ClassComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import RoutesComp from './Components/RoutesComp';




function App() {
  
  let studentMarks=[10,20,30,40];
  let studentDetails={
    name:'',
    age:''
  }

  
  
  return (
    <div className="App">
      <Header />
       <RoutesComp /> 
      





  { /*  <h2 className='text-primary'>Welcome to ReactJs</h2>
      <Home name="sai" age="25" studentMarks={studentMarks} studentDetails={studentDetails} />
  <ClassComponent />   */}
    
    </div>
  );
}

export default App;
