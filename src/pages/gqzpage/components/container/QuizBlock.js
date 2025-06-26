import ProgressContainer from "../ui/ProgressContainer"
import Question from "../ui/Question"
import OpcoesContainer from "./OpcoesContainer"
import Result from "./Result"
import NextQuestionBtn from "./NextQuestionBtn"


function QuizBlock({ pergunta, respostaSelecionada, handleRespostaClick, handleProxima, feedback }) {
    return <>
    <div id="quiz_block" className="column_start">
            <Question pergunta={pergunta} />

            <ProgressContainer />
            <OpcoesContainer
              pergunta={pergunta}
              respostaSelecionada={respostaSelecionada}
              handleRespostaClick={handleRespostaClick}
            />

            <Result feedback={feedback || ''} />
            {respostaSelecionada !== null && (
              <NextQuestionBtn handleProxima={handleProxima}/>
            )}
          </div>
    </>
}

export default QuizBlock