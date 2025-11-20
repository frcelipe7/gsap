import Button from '../Button/Button.jsx';
import './NavBar.css';

function NavBar() {
  return <nav>
    <div className="logo"><span>Vértice</span><br />Arquitetura</div>
    <div className="menu">
      <ul>
        <li>Sobre</li>
        <li>Processos</li>
        <li>Portfólio</li>
        <li>Depoimentos</li>
      </ul>
    </div>
    <div className="button_container">
      <Button text="Quero um projeto" backgroundColor="#FFFFFF" textColor="#000000" onClick={1} fontSize="15px"/>
    </div>
  </nav>
}

export default NavBar;
