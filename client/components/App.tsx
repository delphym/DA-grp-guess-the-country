import { useState } from 'react'
import Nav from './Nav'
import GuessForm from './GuessForm'
import Flag from './Flag'

function App() {
  const [showImg, setShowImg] = useState(false)

  const handleShowImg = () => {
    setShowImg(!showImg)
  }

  return (
    <div>
      <Nav />

      <main>
        <h1>Guess the Country</h1>
        <p>React development has begun!</p>
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
        <GuessForm />
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
