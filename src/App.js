
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';
import { Store } from 'redux';
function App() {
  return (
 <>
   <Navbar/>
   <store/>
      <div className=" container">
   <Shop/>
    </div>
    </>
  );
}

export default App;
