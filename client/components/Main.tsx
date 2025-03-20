import { ReactEventHandler, useState } from 'react'
import Game from './Game'

function Main() {
  const [showGame, setShowGame] = useState(false) // State to manage Game component visibility

  const handleShowGame = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setShowGame(!showGame) // Toggle the visibility of the Game component
  }
  console.log(showGame)

  return (
    <>
      <h1>Guess the Country</h1>
      <ul>
        <li>
          <button id="gamebtn" onClick={handleShowGame}>
            {showGame ? 'Hide Game' : 'Show Game'}
          </button>
        </li>
      </ul>
      {showGame && <Game />} {/* Render the Game component */}
    </>
  )
}

export default Main
