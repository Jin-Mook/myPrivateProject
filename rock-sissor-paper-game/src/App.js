import HandButton from './HandButton';
import Button from './Button';

function App() {
  const handleClearClick = (a) => console.log(a);
  const handleButtonClick = () => console.log('처음부터')
  return (
    <div>
      <Button onClick={handleButtonClick}>처음부터</Button>
      <HandButton value="rock" onClick={handleClearClick} />
      <HandButton value="scissor" onClick={handleClearClick} />
      <HandButton value="paper" onClick={handleClearClick} />
    </div>
  );
}

export default App;