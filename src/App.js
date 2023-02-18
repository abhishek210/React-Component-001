import Name from "./Component/Name";
import Exper from './Component/Experince';
import Skill from "./Component/skill";
import Skill1 from "./Component/skill1";
import Hobby from "./Component/hobby";
import './app.css'
function App() {
  return (
    <div className="app">
      <Name />
      <hr></hr>
      <Exper />
      <hr></hr>
      <Skill1 />
      <hr className="line"></hr>
      <hr></hr>
      <Skill />
      <hr></hr>
      <Hobby />
      <hr></hr>
    </div>
  )
   
  
}

export default App;
