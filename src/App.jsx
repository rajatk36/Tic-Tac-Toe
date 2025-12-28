import { useState, useEffect } from 'react'
import Cell from './assets/cell'
import bg from './assets/tictactoe_bg.jpeg'
function Tic_tac_toe() {
  const[cells , setcells] = useState(["","","","","","","","",""])
  const[msg , setmsg] = useState("")
  const[move,setmove] = useState("circle")
  const[combo,setcombo]= useState([])
  const Playmessage = "It is now " + move + "'s move."

  const check =() =>{
    const winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8] ,[2,4,6]]
    for(let combo of winningCombo){
      if(combo.every(cell => cells[cell]=== "circle")){
        setmsg("circle wins")
        setcombo(combo)
        return
      }
      if(combo.every(cell => cells[cell]=== "cross")){
        setmsg("cross wins")
        setcombo(combo)
        return
      }
    }
    const movesMade = cells.some(cell => cell !== "")
    const isDraw = cells.every(cell => cell !== "")
    if (movesMade && isDraw) {
      setmsg("match draw")
    }
  }
  useEffect(() => {
   check()
  },[cells])

  const handleReset =() => {
    setcells(["","","","","","","","",""])
    setmsg("")
    setmove("circle")
    setcombo([])
  }
  return (
      <div className='tic-tac-toe' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='header'>
        Tic-Tac-Toe
      </div>
       <div className='board'> 
        {cells.map((cell , index) => 
        <Cell 
        key ={index}
        id = {index}
        cell ={cell}
        move ={move}
        setmove={setmove}
        cells= {cells}
        setcells = {setcells}
        msg = {msg}
        combo={combo}
        />)} 
        
       </div>
       <div className='footer'>
        <p className='game-msg'>
          {msg || Playmessage }
        </p>
        <button className='game-btn' onClick={handleReset}>Reset</button>
       </div>
    </div>

   
  )
}

export default Tic_tac_toe
