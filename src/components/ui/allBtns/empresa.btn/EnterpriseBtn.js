import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './EnterpriseBtn.module.scss';

function EnterpriseBtn ({icon}){
    return<>
    <button id= "EnterpriseBtn" className={styles.EnterpriseBtn}>  <FontAwesomeIcon icon={icon} /></button>
    </>
}

export default EnterpriseBtn

