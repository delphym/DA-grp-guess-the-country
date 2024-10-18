import { useState } from 'react'
import Nav from './Nav'
import Main from './Main'
import Game from './Game'
import GuessForm from './GuessForm'
import Flag from './Flag'
import Score from './Score'
import Footer from './Footer'
import data from '../../data/countries'

function App() {
  const [showGame, setShowGame] = useState(false) // State to manage Game component visibility

  const handleShowGame = () => {
    event?.preventDefault()
    setShowGame(!showGame) // Toggle the visibility of the Game component
  }
  console.log(showGame)
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
          <li>
            {/* <Score />  */}
            {/* <p id="score"></p> */}
            {/* <p id="score">0</p> */}
          </li>
        </ul>
        {/* <GuessForm/> */}
        {showGame && <Game />}

        {/* <Main /> */}
        {/* <Flag handleFlag={handleFlag} /> */}
        {/* <Score score={1} countryName={'New Zealand'} countryCode={'NZ'} /> */}
        {/* <GuessForm handleCountryName={handleCountryName} /> */}
      </main>
      <footer id="credit">
        <Footer />
      </footer>
    </div>
  )
}

export default App
