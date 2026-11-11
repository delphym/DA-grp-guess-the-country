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

  const getDifficultyClass = (): string => {
    if (numOptions <= 2) return 'easy'
    if (numOptions <= 4) return 'medium'
    return 'hard'
  }

  return (
    <div className={`multiple-choice-buttons ${getDifficultyClass()}`}>
      {options.map((country, index) => (
        <button
          key={index}
          onClick={() => onAnswer(country)}
        >
          {country}
        </button>
      ))}
    </div>
  )
}

export default MultipleChoiceButtons
