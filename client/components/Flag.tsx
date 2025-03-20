import { useEffect, useState } from 'react'
import data from '../../data/countries.ts'

interface Props {
  flagCode: string
  flagCountryName: string
}

function Flag({ flagCode, flagCountryName }: Props) {
  console.log('new flag:', flagCountryName, flagCode)

  return (
    <img
      src={`https://flagpedia.net/data/flags/w580/${flagCode.toLowerCase()}.webp`}
      alt={`Flag of country with code '${flagCode}'`}
    ></img>
  )
}

export default Flag
