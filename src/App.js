import { Routes, Route } from "react-router-dom";
import styles from "./components/ui/App.module.scss";
import LoginPage from "./pages/login_page/LoginPage";
import Home from "./pages/homepage/Home";
import Header from "./structure/header/Header";
import FormPage from "./pages/formpage/Formpage"
import { ThemeProvider } from "./theme/themeContext";

function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>

        <Header />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form' element={<FormPage />} />
        </Routes>
        </div >
    </ThemeProvider>
     
    
  );
}

export default App;
