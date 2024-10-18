import { useState } from 'react'
import Flag from './Flag.tsx'
import data from '../../data/countries.ts'

function App() {
  const [code, setCode] = useState(data[0].code)

  const handleFlag = (cc: string) => {
    setCode(cc)
  }

  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      <Flag
        handleFlag={() => {
          handleFlag
        }}
      />
    </div>
  )
}

export default App
