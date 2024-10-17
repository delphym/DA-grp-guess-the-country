import { useState } from 'react'
import countriesData from '../../data/countries'

interface Props {
  handleCountryName: (newCountry: string) => void
}

function GuessForm({ handleCountryName }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }

  //watch from 24:00 https://youtu.be/MSBY9Myl0tw?si=2lRS7oQlxvFTuF1-&t=1443
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleCountryName(inputValue)
    event.preventDefault()
    setInputValue('')
  }

  return (
    <>
      <div>Type in a country name</div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="countryName"
          id="county"
          value={inputValue}
          placeholder={`e.g.${placeholderText()}`}
        />
        <button type="submit">submit</button>
      </form>
      <p />
    </>
  )
}

function placeholderText() {
  const countries: string[] = countriesData.map((country) => country.name)
  const randomIdx = Math.floor(Math.random() * countries.length - 1)
  return countries[randomIdx]
}

export default GuessForm
