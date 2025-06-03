import styles from './Input.module.scss'

function Input({ placeholder, value, onChange, onBlur, type, error }) {
    return <>
        <input id="input"
            className={styles.Input}
            placeholder={placeholder}
            type={type || (placeholder === 'Senha' ? 'password' : 'text')}
            value={value}
            onChange={onChange}
            onBlur={onBlur}></input>
        {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
    </>
}

export default Input;