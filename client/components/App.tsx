import { useState } from 'react'
import Nav from './Nav'
import Game from './Game'
import GuessForm from './GuessForm'
import Flag from './Flag'
import Score from './Score'

function App() {
  const [showImg, setShowImg] = useState(false)
  const [countryName, setCountryName] = useState('')
  // const [countryCode, setCountryCode] = useState('')


  const handleShowImg = () => {
    setShowImg(!showImg)
  }

  const handleCountryName = (countryName: string) => {
    
    setCountryName(countryName)
  }
  console.log("passed country:", countryName) 
  
  return (
    <div>
      <Nav />

      <main>
        <h1>Guess the Country</h1>
        <p>React development has begun!</p>
        {/* <Score/> */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="http://delphym-mania-chc-24-worldwide-routing.devacademy.nz/">
              Need some learning?
            </a>
          </li>
          <li>
            <a href="#credit">Credit</a>
          </li>
        </ul>
        <GuessForm handleCountryName={handleCountryName}/>
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
