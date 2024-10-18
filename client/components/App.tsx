import { useState } from 'react'
import Nav from './Nav'
import Main from './Main'
import Game from './Game'
<!-- <<<<<<< gamebutton-layout
// import GuessForm from './GuessForm'
// import Flag from './Flag'
=======
import GuessForm from './GuessForm'
import Flag from './Flag'
import Score from './Score'
import Footer from './Footer'
// >>>>>>> main -->

function App() {
  const [countryName, setCountryName] = useState('')
  // const [countryCode, setCountryCode] = useState('')

  const handleCountryName = (countryName: string) => {
    setCountryName(countryName)
  }
  console.log('passed country:', countryName)

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
<!-- <<<<<<< gamebutton-layout -->
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
<!-- ======= -->
        <Main />
        <Score score={1} countryName={'New Zealand'} countryCode={'NZ'} />
        <GuessForm handleCountryName={handleCountryName} />
<!-- >>>>>>> main -->
      </main>
      <footer id="credit">
        <Footer />
      </footer>
    </div>
  )
}

export default App
