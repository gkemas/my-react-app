
import './App.css';
// import LoginPage from './Components/LoginPage/LoginPage';
// import SelectButton from './Components/SelectButton/SelectButton';
import Loyouts from './Loyouts';
import  Index from './Routes';
import {  BrowserRouter as Router  } from 'react-router-dom';
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div>
      <Router>

    
      {/* <LoginPage/>
     <SelectButton/> */}
      <Loyouts>
        <Index/>
      </Loyouts>
      </Router>
    </div>
  );
}

export default App;
