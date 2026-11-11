import { useState, useEffect, useCallback } from 'react'

import GuessForm from './GuessForm'
import Flag from './Flag'
import Score from './Score'
import MultipleChoiceButtons from './MultipleChoiceButtons'
import data from '../../data/countries'

type Difficulty = 'easy' | 'medium' | 'hard' | 'expert'

function Game() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [flagCode, setFlagCode] = useState('')
  const [flagCountryName, setFlagCountryName] = useState('')
  const [score, setScore] = useState([0, 0])
  const [countAttempts, setCountAttempts] = useState(0)

  const refreshFlag = useCallback(() => {
    const max = data.length - 1
    const rindx = Math.floor(Math.random() * max)
    const newCcode = data[rindx].code
    const newCname = data[rindx].name
    setFlagCode(newCcode)
    setFlagCountryName(newCname)
  }, [])

  // Initialize the first flag
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshFlag()
  }, [refreshFlag])

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

  console.log('score:', score)
  console.log('flagCountryName:', flagCountryName)
  console.log('flagCode:', flagCode)

  const getNumOptions = (): number => {
    switch (difficulty) {
      case 'easy':
        return 2
      case 'medium':
        return 4
      case 'hard':
        return 6
      case 'expert':
        return 0
      default:
        return 0
    }
  }

  const difficultyStyle = {
    display: 'flex',
    gap: '0.625rem',
    justifyContent: 'center',
    marginBottom: '1.25rem',
    flexWrap: 'wrap' as const,
  }

  const buttonBase = {
    padding: '0.625rem 0.9375rem',
    fontSize: '0.875rem',
    border: '2px solid #333',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    transition: 'all 0.3s',
    minHeight: '44px',
  }

  const getDifficultyButtonStyle = (level: Difficulty) => ({
    ...buttonBase,
    backgroundColor: difficulty === level ? '#4CAF50' : '#ddd',
    color: difficulty === level ? 'white' : 'black',
  })

  return (
    <div className="game-container">
      <div style={difficultyStyle}>
        <button
          style={getDifficultyButtonStyle('easy')}
          onClick={() => setDifficulty('easy')}
        >
          Easy
        </button>
        <button
          style={getDifficultyButtonStyle('medium')}
          onClick={() => setDifficulty('medium')}
        >
          Medium
        </button>
        <button
          style={getDifficultyButtonStyle('hard')}
          onClick={() => setDifficulty('hard')}
        >
          Hard
        </button>
        <button
          style={getDifficultyButtonStyle('expert')}
          onClick={() => setDifficulty('expert')}
        >
          Expert
        </button>
      </div>

      <Flag flagCode={flagCode} flagCountryName={flagCountryName} />
      <Score score={score} countAttempts={countAttempts} />

      {difficulty === 'expert' ? (
        <GuessForm handleCountryName={handleScore} />
      ) : (
        <MultipleChoiceButtons
          correctCountry={flagCountryName}
          onAnswer={handleScore}
          numOptions={getNumOptions()}
        />
      )}
    </div>
  )
}

export default Game
