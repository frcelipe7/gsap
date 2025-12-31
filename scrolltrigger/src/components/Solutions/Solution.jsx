import './Solution.css';

function Solution() {
  return (
    <section className="solution">
      <h2>Soluções Inteligentes & Automação</h2>

      <p className="description">
        Através de tecnologia de ponta, transformo gargalos operacionais em
        processos automatizados e eficientes
      </p>

      <div className="cards">
        <div className="card">
          <div className="icon">
            <span className="material-symbols-outlined">automation</span>
          </div>
          <div className="text">
            <p className="title">Automação de Processos</p>
            <p className="text">
              Redução de tarefas manuais <br /> e erros operacionais através
              integrações inteligentes
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <span className="material-symbols-outlined">code</span>
          </div>
          <div className="text">
            <p className="title">Desenvolvimento de Software</p>
            <p className="text">
              Sistemas personalizados <br /> desenvolvidos sob medida <br />{' '}
              para a escala do seu negócio
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <span className="material-symbols-outlined">insert_chart</span>
          </div>
          <div className="text">
            <p className="title">Inteligência de Dados</p>
            <p className="text">
              Transformação de dados <br /> brutos em dashboards e insights
              estratégicos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
