import styles from './Input.module.scss'

function Input({ placeholder, value, onChange, onBlur, type, error }) {
    return <>
        <input 
            className={styles.Input}
            placeholder={placeholder}
            type={type || (placeholder === 'Senha' ? 'password' : 'text')}
            value={value}
            onChange={onChange}
            onBlur={onBlur}></input>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
}

export default Input;