import { useState, useEffect } from 'react'

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

  // const [countryName, setCountryName] = useState('')
  const [flagCode, setFlagCode] = useState('')
  const [flagCountryName, setFlagCountryName] = useState('')
  const [score, setScore] = useState([0, 0])
  const [countAttempts, setCountAttempts] = useState(0)

  // Initialize the first flag
  useEffect(() => {
    refreshFlag()
  }, [])

  // const handleFlag = (cc: string, cn: string) => {
  //   setFlagCode(cc)
  //   setFlagCountryName(cn)
  //   console.log('received flag code:', cc)
  //   console.log('received flag name:', cn)
  // }
  // console.log('passed code:', flagCode)

  // const handleCountryName = (countryName: string) => {
  //   console.log('guessed country:', countryName)
  //   setCountryName(countryName)
  //   setTimeout(() => handleScore(), 0)
  // }
  // console.log('guessed country:', countryName)

  const handleScore = (guessedName: string) => {
    console.log('guessed country:', guessedName, '| Actual: ', flagCountryName)

    const isMatch =
      guessedName.trim().toLowerCase() === flagCountryName.trim().toLowerCase()
    setScore(([correct, wrong]) =>
      isMatch ? [correct + 1, wrong] : [correct, wrong + 1],
    )

    setCountAttempts(countAttempts + 1)
    refreshFlag()
  }

  const refreshFlag = () => {
    const max = data.length - 1
    const rindx = Math.floor(Math.random() * max)
    const newCcode = data[rindx].code
    const newCname = data[rindx].name
    setFlagCode(newCcode)
    setFlagCountryName(newCname)
  }

  console.log('score:', score)
  // console.log('countryName:', guessedName)
  console.log('flagCountryName:', flagCountryName)
  console.log('flagCode:', flagCode)

  return (
    <div style={gameStyle}>
      <Flag flagCode={flagCode} flagCountryName={flagCountryName} />
      <Score score={score} countAttempts={countAttempts} />
      <GuessForm handleCountryName={handleScore} />
    </div>
  )
}

export default Game
