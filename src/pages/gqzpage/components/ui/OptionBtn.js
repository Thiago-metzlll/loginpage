
function OptionBtn({
  texto,
  index,
  onClick,
  respostaSelecionada,
  correta
}) {
  let cor = '';
  if (respostaSelecionada !== null) {
    if (index === correta) cor = 'green';
    else if (index === respostaSelecionada) cor = 'red';
  }

  return (
    <button
      className="resposta btns"
      onClick={() => onClick(index)}
      disabled={respostaSelecionada !== null}
      style={{
        backgroundColor: cor,
        color: cor ? 'white' : 'black',
        cursor: respostaSelecionada !== null ? 'not-allowed' : 'pointer',
        marginBottom: '10px',
      }}
    >
      {texto}
    </button>
  );
}

export default OptionBtn;
