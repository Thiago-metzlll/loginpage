//import Input from './components/ui/input/Input'
import './components/ui/App.scss';
import EnterpriseBtn from './components/ui/empresa.btn/EnterpriseBtn';
//import EnterBtn from './components/ui/enter.btn/EnterBtn';
//import TextBtn from './components/ui/text.btn/TextBtn';
import { faHouse } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div id='center'>
      <EnterpriseBtn icon={faHouse}/>
    <div id='teste'></div>
    </div>
  );
}

export default App;
