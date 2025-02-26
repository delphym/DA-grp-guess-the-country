import { useState } from 'react'

import GuessForm from './GuessForm'
import Flag from './Flag'
import Score from './Score'
import data from '../../data/countries'

function Game() {
  const gameStyle = {
    backgroundColor: 'rgb(130 190 220)', //'#f0f0f0',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '600px',
    margin: '20px auto',
  }

  const [countryName, setCountryName] = useState('')
  const [flagCode, setFlagCode] = useState('')
  const [flagCountryName, setFlagCountryName] = useState('')
  // const [score, setScore] = useState([0, 0])

  const handleFlag = (cc: string, cn: string) => {
    setFlagCode(cc)
    setFlagCountryName(cn)
    console.log('received flag code:', cc)
    console.log('received flag name:', cn)
  }
  console.log('passed code:', flagCode)

  const handleCountryName = (countryName: string) => {
    console.log('guessed country:', countryName)
    setCountryName(countryName)
  }
  console.log('guessed country:', countryName)

  const isMatch = (countryName: string, flagCountryName: string) => {
    return countryName.toLowerCase() === flagCountryName.toLowerCase()
  }
  const score = [isMatch(countryName, flagCountryName) ? 1 : 0, 1]
  console.log('score:', score)
  console.log('countryName:', countryName)
  console.log('flagCountryName:', flagCountryName)
  console.log('flagCode:', flagCode)
  console.log('isMatch:', isMatch(countryName, flagCountryName))

  return (
    <div style={gameStyle}>
      <Flag handleFlag={handleFlag} />
      <Score score={[1]} countryName={'New Zealand'} countryCode={'NZ'} />
      <GuessForm handleCountryName={handleCountryName} />
    </div>
  )
}

export default Game
