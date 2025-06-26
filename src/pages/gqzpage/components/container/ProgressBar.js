
function ProgressBar({ progresso }) {
    return <>
        <div
            id="barra-progresso"
            style={{
                width: `${progresso}%`,
                height: '10px',
                backgroundColor: '#7CC133',
                transition: 'width 0.3s ease',
            }}
        ></div>
    </>
}

export default ProgressBar