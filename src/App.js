import { faCircleUser} from '@fortawesome/free-solid-svg-icons';

import Input from "./components/ui/input/Input";
import LoginText from "./components/ui/LoginText/LoginText";
import styles from './components/ui/App.module.scss';
import EnterBtn from "./components/ui/allBtns/enter.btn/EnterBtn";
import TextBtn from './components/ui/allBtns/text.btn/TextBtn';
import EnterpriseBtn from "./components/ui/allBtns/empresa.btn/EnterpriseBtn" ;


function App() {
  return (
    <div className={styles.center}>
      <LoginText texto="Login!"/>
      <Input  placeholder="Usuário"/>
      <Input  placeholder="Senha"/>
      <EnterBtn texto= "Entrar"/>
      <EnterpriseBtn  icon={faCircleUser} />
      <TextBtn texto= "Criar contaaaa"/>



    <div id='teste'></div>
    </div>
  );
}

export default App;
