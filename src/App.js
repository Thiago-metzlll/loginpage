import { Routes, Route, Link } from "react-router-dom";
import styles from "./components/ui/App.module.scss";
import LoginPage from "./components/pages/LoginPage";
///import Home from "./components/pages/Home";

function App() {
  return (
    <div className= 'App'>
      <header>
        <nav>
          <Link to={'/home'}>Home</Link>
          <Link to={'/'}>Login</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element= {<LoginPage/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
