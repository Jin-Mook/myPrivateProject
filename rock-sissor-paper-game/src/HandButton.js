import HandIcon from "./HandIcon"
import backgroundImg from "./assets/purple.svg"
import './HandButton.css'

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);

  return (
      <button onClick={handleClick} className="HandButton"><HandIcon value={value} className="HandButton-icon"></HandIcon></button>
  )
}

export default HandButton;