interface Props {
  flagCode: string
  flagCountryName: string
}

function Flag({ flagCode, flagCountryName }: Props) {
  console.log('new flag:', flagCountryName, flagCode)

  return (
    <div className="flag-container">
      <img
        src={`https://flagpedia.net/data/flags/w580/${flagCode.toLowerCase()}.webp`}
        alt={`Flag of country with code '${flagCode}'`}
      ></img>
    </div>
  )
}

export default Flag
