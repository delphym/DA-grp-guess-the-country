interface Props {
  flagCode: string
  flagCountryName: string
}

function Flag({ flagCode, flagCountryName }: Props) {
  console.log('new flag:', flagCountryName, flagCode)

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  }

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  }

  return (
    <div style={containerStyle}>
      <img
        style={imgStyle}
        src={`https://flagpedia.net/data/flags/w580/${flagCode.toLowerCase()}.webp`}
        alt={`Flag of country with code '${flagCode}'`}
      ></img>
    </div>
  )
}

export default Flag
