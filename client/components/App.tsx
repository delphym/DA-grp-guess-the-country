import { useState } from 'react'
import Nav from './Nav'
import Main from './Main'
import Game from './Game'
import GuessForm from './GuessForm'
import Flag from './Flag'
import Score from './Score'
import Footer from './Footer'

function App() {
  const [countryName, setCountryName] = useState('')
  // const [countryCode, setCountryCode] = useState('')

  const handleCountryName = (countryName: string) => {
    setCountryName(countryName)
  }
  console.log('passed country:', countryName)

  return (
    <div>
      <Nav />

      <main>
        <Main />
        <Score score={1} countryName={'New Zealand'} countryCode={'NZ'} />
        <GuessForm handleCountryName={handleCountryName} />
      </main>
      <footer id="credit">
        <Footer />
      </footer>
    </div>
  )
}

export default App
