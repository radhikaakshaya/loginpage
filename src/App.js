import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignupPage from './Pages/SignupPage';

function App() {
  return (
    
    <div>
   <ToastContainer
   position='top-center'
   />
<SignupPage/>

    </div>
  );
}


export default App;
