import data from '../../data/countries.ts'

interface Props {
  handleFlag: (code: string) => void
}

function Flag({ handleFlag }: Props) {
  let ccode: string = '0'
  const getFlag = () => {
    const max: number = data.length - 1
    const rindx: number = Math.floor(Math.random() * max)
    // const rindx: number = 129

    ccode = data[rindx].code
  }

  getFlag()
  handleFlag(ccode)

  return (
    <img
      src={`https://flagpedia.net/data/flags/w580/${ccode.toLowerCase()}.webp`}
      alt={`Flag of country with code '${ccode}'`}
    ></img>
  )
}

export default Flag
