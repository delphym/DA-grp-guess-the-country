// import data from '../../data/countries'
// import Flag from './Flag'
// import GuessForm from './GuessForm'
// import { useState } from 'react'


interface Props {
  score: number
  countryName: string
  countryCode: string
}

function Score({score, countryName, countryCode }: Props){
  
  // const [score, setScore] = useState(0)


  return (
   <>
   <div>
        This is Score component
        <ul>
          <li>{score}</li>
          <li>{countryName}</li>
          <li>{countryCode}</li>
          </ul>
   </div>
   <div>Score: </div>
   </>

  )
}

export default Score