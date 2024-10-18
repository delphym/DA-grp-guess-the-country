import { useState } from 'react'
import Game from './Game'

function Main() {
  const [showGame, setShowGame] = useState(false) // State to manage Game component visibility

  const handleShowGame = () => {
    event?.preventDefault()
    setShowGame(!showGame) // Toggle the visibility of the Game component
  }
  console.log(showGame)

  return (
    <>
      <h1>Guess the Country</h1>
      <ul>
        <li>
          <a href="/">| Home |</a>
        </li>

        <li>
          <a href="http://delphym-mania-chc-24-worldwide-routing.devacademy.nz/">
            | Need some learning? |
          </a>
        </li>
        <li>
          <a href="#credit">| Credit |</a>
        </li>
      </ul>
      <ul>
        <li>
          <button id="gamebtn" onClick={handleShowGame}>
            {showGame ? 'Hide Game' : 'Show Game'}
          </button>
        </li>
      </ul>
      <ul>
        <li></li>
      </ul>
      {/* <GuessForm/> */}
      {showGame && <Game />} {/* Render the Game component */}
    </>
  )
}

export default Main
