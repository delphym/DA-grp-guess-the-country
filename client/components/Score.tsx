// import data from '../../data/countries'
// import Flag from './Flag'
// import GuessForm from './GuessForm'

interface Props {
  score: number[]
  countAttempts: number
}

function Score({ score, countAttempts }: Props) {
  console.log('- score:', score[0], score[1])

  return (
    <div className="score-display">
      <p>
        Score {'#' + countAttempts} {'=>'} &nbsp;&nbsp; correct: {score[0]}
        &nbsp; vs.&nbsp; wrong: {score[1]}
      </p>
    </div>
  )
}

export default Score
