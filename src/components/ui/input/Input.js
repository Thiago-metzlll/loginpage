import styles from './Input.module.scss'

function Input({ placeholder }) {
    return <>
        <input id="input"
            className={styles.Input}
            placeholder={placeholder}
            type={placeholder === 'Senha' ? 'password' : 'text'}></input>
    </>
}

export default Input;