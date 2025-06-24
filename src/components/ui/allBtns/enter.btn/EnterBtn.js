import styles from './EnterBtn.module.scss'

function EnterBtn ({texto}){
    return<>
    <button id= "textbtn" className={styles.TextBtn} > {texto} </button>
    </>
}

export default EnterBtn