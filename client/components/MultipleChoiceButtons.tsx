import { useMemo } from 'react'
import data from '../../data/countries'

interface Props {
  correctCountry: string
  onAnswer: (guessedName: string) => void
  numOptions: number
}

function MultipleChoiceButtons({ correctCountry, onAnswer, numOptions }: Props) {
  const options = useMemo(() => {
    const allCountries = data.map((c) => c.name)
    const otherCountries = allCountries.filter((c) => c !== correctCountry)
    
    const shuffled = otherCountries
      .sort(() => Math.random() - 0.5)
      .slice(0, numOptions - 1)
    
    const choices = [correctCountry, ...shuffled]
    
    return choices.sort(() => Math.random() - 0.5)
  }, [correctCountry, numOptions])

  const buttonStyle = (isCorrect: boolean) => ({
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  })

  const getGridColumns = () => {
    if (numOptions <= 2) return 1
    if (numOptions <= 4) return 2
    return 3
  }

  const getMaxWidth = () => {
    if (numOptions <= 2) return '300px'
    if (numOptions <= 4) return '400px'
    return '600px'
  }

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
    gap: '15px',
    marginTop: '20px',
    maxWidth: getMaxWidth(),
    margin: '20px auto 0',
  }

  return (
    <div style={containerStyle}>
      {options.map((country, index) => (
        <button
          key={index}
          onClick={() => onAnswer(country)}
          style={buttonStyle(country === correctCountry)}
        >
          {country}
        </button>
      ))}
    </div>
  )
}

export default MultipleChoiceButtons
