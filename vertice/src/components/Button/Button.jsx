import './Button.css';

function Button({ className, text, backgroundColor, textColor, onClick, fontSize }) {
  return (
    <button className={className} onClick={onClick} style={{ backgroundColor: backgroundColor, color: textColor, fontSize: fontSize}}>{text}</button>
  )
}

export default Button;
