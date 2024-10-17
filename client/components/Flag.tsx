function Flag(code: string) {
    return <img src={`https://flagpedia.net/data/flags/w580/${code.toLowerCase()}.webp`} alt={`Flag of country with code '${code}'`}></img>
}

export default Flag
