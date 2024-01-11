
import './App.css';
// import LoginPage from './Components/LoginPage/LoginPage';
// import SelectButton from './Components/SelectButton/SelectButton';
import Loyouts from './Loyouts';
import  Index from './Routes';
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div>
      {/* <LoginPage/>
     <SelectButton/> */}
      <Loyouts>
        <Index/>
      </Loyouts>
    </div>
  );
}

export default App;
