import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
    return <>
        <header className={styles.header}>
            <Link className={styles.link} to={'/home'}>Home</Link>
            <Link className={styles.link} to={'/'}>Login</Link>
        </header>
    </>

}

export default Header