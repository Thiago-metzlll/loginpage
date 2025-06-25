import styles from './EnterBtn.module.scss'

function EnterBtn({ texto, onClick }) {
    return <>
        <button id="textbtn" className={styles.TextBtn} onClick={onClick} // <-- aqui está o segredo!
        > {texto} </button>
    </>
}

export default EnterBtn