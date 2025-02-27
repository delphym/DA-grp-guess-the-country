// import data from '../../data/countries'
// import Flag from './Flag'
// import GuessForm from './GuessForm'

import { useState } from 'react'

interface Props {
  handleScore: (newScore: number[], countAttempts: number) => void
}

function Score({ handleScore }: Props) {
  const [score, setScore] = useState([0, 0])
  const [countAttempts, setCountAttempts] = useState(0)
  console.log('score:', score[0], score[1])

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
        Score {'#' + countAttempts} {'=>'} &nbsp;&nbsp; correct: {score[0]}
        &nbsp; vs.&nbsp; wrong: {score[1]}
      </p>
    </>
  )
}

export default Score
