import styles from './LoginText.module.scss'

function LoginText ({texto}) {
    return <>
    <h1 id="loginText" className={styles.LoginText}> {texto} </h1>
    </>
}

export default LoginText