import { useState } from 'react'
import Game from './Game'

function Main() {
  const [showGame, setShowGame] = useState(false)

  const handleShowGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowGame(!showGame)
  }
  console.log(showGame)

  return (
    <>
      <h1>Guess the Country</h1>
      <div className="game-controls">
        <button id="gamebtn" onClick={handleShowGame}>
          {showGame ? 'Hide Game' : 'Show Game'}
        </button>
      </div>
      {showGame && <Game />}
    </>
  )
}

export default Main
