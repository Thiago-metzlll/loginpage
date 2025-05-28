import { Link } from "react-router-dom";
import styles from "./components/ui/App.module.scss"

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
        <Route path='/home' element= {<Home/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
