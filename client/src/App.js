import './App.css';
import IndexPage from './pages/indexPage/indexPage';
import RegisterPage from './pages/registerPage/registerPage';
import LoginPage from './pages/loginPage/loginPage';
import SendMessagePage from './pages/sendMessagePage/sendMessagePage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<IndexPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/sendmessage' element={<SendMessagePage />}/>

      </Routes>
    </div>
  );
}

export default App;