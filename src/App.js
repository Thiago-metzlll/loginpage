import { Routes, Route} from "react-router-dom";
import styles from "./components/ui/App.module.scss";
import LoginPage from "./components/pages/LoginPage";
import Home from "./components/pages/homepage/Home";
import Header from "./components/model/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Routes>
        <Route path='/' element= {<LoginPage/>}/>
        <Route path='/home' element={<Home />} />
      
      </Routes>
     
    </div>
  );
}

export default App;
