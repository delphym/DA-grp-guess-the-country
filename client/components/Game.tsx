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
  const [code, setCode] = useState(data[0].code)

  const handleFlag = (cc: string) => {
    setCode(cc)
  }

  const handleCountryName = (countryName: string) => {
    setCountryName(countryName)
  }
  console.log('passed country:', countryName)

  return (
    <div style={gameStyle}>
      <Flag
        handleFlag={() => {
          handleFlag
        }}
      />
      <Score score={1} countryName={'New Zealand'} countryCode={'NZ'} />
      <GuessForm handleCountryName={handleCountryName} />{' '}
    </div>
  )
}

export default Game
