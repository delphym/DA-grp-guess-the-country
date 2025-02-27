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
  const [score, setScore] = useState([0, 0])
  const [countAttempts, setCountAttempts] = useState(0)

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
    setTimeout(() => handleScore(score), 0)
  }
  console.log('guessed country:', countryName)

  const handleScore = (score: number[]) => {
    const isMatch = (countryName: string, flagCountryName: string) => {
      console.log('countryName:', countryName)
      console.log('flagCountryName:', flagCountryName)

      const matched =
        countryName.toLowerCase() === flagCountryName.toLowerCase()
      console.log('matched:', matched)

      return matched
    }
    console.log('isMatch:', isMatch)

    const newScore = isMatch(countryName, flagCountryName)
      ? [score[0] + 1, score[1]]
      : [score[0], score[1] + 1]
    setScore(newScore)
    setCountAttempts((prevCount) => prevCount + 1)
    console.log('newScore:', newScore)
    console.log('countAttempts:', countAttempts)
  }

  console.log('score:', score)
  console.log('countryName:', countryName)
  console.log('flagCountryName:', flagCountryName)
  console.log('flagCode:', flagCode)

  return (
    <div style={gameStyle}>
      <Flag handleFlag={handleFlag} />
      <Score score={score} countAttempts={countAttempts} />
      <GuessForm handleCountryName={handleCountryName} />
    </div>
  )
}

export default Game
