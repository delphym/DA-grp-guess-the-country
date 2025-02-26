// import data from '../../data/countries'
// import Flag from './Flag'
// import GuessForm from './GuessForm'

import { useState } from 'react'

interface Props {
  score: number[]
  countryName: string
  countryCode: string
}

function Score({ score, countryName, countryCode }: Props) {
  // const [score, setScore] = useState(0)

  return (
    <>
      <div>
        {/* <ul>
          <li>{score}</li>
          <li>{countryName}</li>
          <li>{countryCode}</li>
        </ul> */}
        <ul></ul>
      </div>
      <p>
        Score {'=>'} &nbsp;&nbsp; wrong: {score[0]}&nbsp; vs.&nbsp; correct:{' '}
        {score[1]}
      </p>
    </>
  )
}

export default Score
