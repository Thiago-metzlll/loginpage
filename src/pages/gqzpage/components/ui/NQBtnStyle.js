
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NQBtnSyle({ handleProxima, iconFa, text }) {
    return <>
        <button id="proxima-pergunta" className="btn_pass" onClick={() => {
            console.log("Botão clicado");
            handleProxima();
        }}>
            <FontAwesomeIcon icon={iconFa} />
            <h1 id='text_secondbtn'>{text} </h1>

        </button>
    </>
}

export default NQBtnSyle