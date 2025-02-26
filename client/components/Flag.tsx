import { useEffect, useState } from 'react'
import data from '../../data/countries.ts'

interface Props {
  handleFlag: (code: string, name: string) => void
}

function Flag({ handleFlag }: Props) {
  const [ccode, setCode] = useState<string>('0')
  const [cname, setCname] = useState<string>('')

  const getFlag = () => {
    const max: number = data.length - 1
    const rindx: number = Math.floor(Math.random() * max)

    const newCcode = data[rindx].code
    const newCname = data[rindx].name
    setCode(newCcode)
    setCname(newCname)
    console.log('Country name:', newCname)
    console.log('Country code of the flag:', newCcode)
  }

  useEffect(() => {
    getFlag()
  }, []) // run only once when component mounts

  useEffect(() => {
    handleFlag(ccode, cname)
  }, [ccode, cname]) // run when ccode or cname changes

  return (
    <img
      src={`https://flagpedia.net/data/flags/w580/${ccode.toLowerCase()}.webp`}
      alt={`Flag of country with code '${ccode}'`}
    ></img>
  )
}

export default Flag
