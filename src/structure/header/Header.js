import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import BtnTheme from './../../components/ui/allBtns/btn.theme/BtnTheme'

function Header() {
    return <>
        <header className={styles.header}>
            <Link className={styles.link} to={'/home'}>Home</Link>
            <Link className={styles.link} to={'/'}>Login</Link>
            <BtnTheme className={styles.btnTheme} />
        </header>
    </>

}

export default Header