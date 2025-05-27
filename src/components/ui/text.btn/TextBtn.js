import styles from './TextBtn.module.scss'

function TextBtn ({texto}){
    return<>
    <button id= "textbtn" className={styles.TextBtn}> {texto} </button>
    </>
}

export default TextBtn