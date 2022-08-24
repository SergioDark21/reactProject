import LoginForm from './login/LoginForm'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MainPage from './mainpage/MainPage';
import { useEffect, useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function checkStorage() {
    if(localStorage.getItem('name')){
      setIsAuthenticated(true)
    }
  }

  useEffect(() => {
    checkStorage();
  }, [])

  return (
    <div className="App">
      {isAuthenticated ? null : <LoginForm /> }
      {!isAuthenticated ? null : <MainPage />}
    </div>
  );
}

export default App;