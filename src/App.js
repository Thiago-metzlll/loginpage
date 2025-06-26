import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login_page/LoginPage";
import Home from "./pages/homepage/Home";
import Header from "./structure/header/Header";
import FormPage from "./pages/formpage/Formpage"
import { ThemeProvider } from "./theme/themeContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import styled from 'styled-components';
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import GeoquizPage from './pages/GeoquizPage/GeoPage';



const AppStyle = styled.div`
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
          <GlobalStyle />
          <AppStyle>
            <Header />
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/' element={
                <GeoquizPage />} />
              <Route path='/cards' element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>} />
              <Route path='/form' element={
                <PrivateRoute>
                  <FormPage />
                </PrivateRoute>} />
            </Routes>
          </AppStyle>
  
      </ThemeProvider>
    </AuthProvider>


  );
}

export default App;
