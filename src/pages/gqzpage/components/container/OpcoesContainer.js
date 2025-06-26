import OptionBtn from "../ui/OptionBtn"

function OpcoesContainer({ pergunta, respostaSelecionada, handleRespostaClick }) {
  return <>
    <div id="opcoes-container">
      {pergunta.respostas.map((resposta, index) => (
        <OptionBtn
          key={index}
          texto={resposta}
          index={index}
          onClick={handleRespostaClick}
          respostaSelecionada={respostaSelecionada}
          correta={pergunta.correta} />
      ))}
    </div>
  </>

}

export default OpcoesContainer