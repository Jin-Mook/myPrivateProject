import Board from './Board';
import { useState } from "react";
import Button from "./button";

function random(n) {
  return Math.ceil(Math.random() * n);
}


function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const [othernum, setOtherNum] = useState(1);
  const [othersum, setOtherSum] = useState(0);
  const [othergameHistory, setOtherGameHistory] = useState([]);


  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
    
    setOtherNum(nextOtherNum);
    setOtherSum(othersum + nextOtherNum);
    setOtherGameHistory([...othergameHistory, nextOtherNum]);
  }

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);

    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
        <Board name="상대" color="red" num={othernum} sum={othersum} gameHistory={othergameHistory}/>
      </div>
    </div>
  )
}

export default App;