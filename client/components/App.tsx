import { useState } from 'react'
import Nav from './Nav'
import Game from './Game'
// import GuessForm from './GuessForm'
// import Flag from './Flag'

function App() {
  const [showImg, setShowImg] = useState(false)

  const handleShowImg = () => {
    setShowImg(!showImg)
  }

  const [showGame, setShowGame] = useState(false); // State to manage Game component visibility

  const handleShowGame = () => {
    event?.preventDefault()
    setShowGame(!showGame); // Toggle the visibility of the Game component
  };
console.log(showGame);
  return (
    <div>
      <Nav />

      <main>
        <h1>Guess the Country</h1>
        {/* <p>React development has begun!</p> */}
        <ul>
          <li>
            <a href="/">| Home |</a>
          </li>
          
          
          <li>
            <a href="http://delphym-mania-chc-24-worldwide-routing.devacademy.nz/">
              |  Need some learning?  |
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
            {/* <button>
              <li>
                <a href="/Game">Play</a>
              </li> */}
            {/* </button> */}
          </li>
        </ul>
        <ul>
          <li>
            {/* <Score />  */}
            <p id="score">Score:</p>
            {/* <p id="score">0</p> */}
          </li>
        </ul>
        {/* <GuessForm/> */}
        {showGame && <Game />}
      </main>
      <footer id="credit">
        This game is proudly <b>Brought to You by The-A-Team</b>!
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={handleShowImg}>
            {showImg ? 'Hide Img' : 'The A Team'}
          </button>
          {showImg && <img src="/images/a-team-smile.gif" alt="The-A-Team" />}
        </div>
      </footer>
    </div>
  )
}

export default App
