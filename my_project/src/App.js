import LoginForm from './login/LoginForm'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MainPage from './mainpage/MainPage';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <MainPage />
    </div>
  );
}

export default App;
