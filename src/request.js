const getPuzzle = async (wordCount)=> {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to get puzzle!')
    }
}
// const getPuzzleOld = (wordCount)=> {
//     return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if(response.status === 200) {
//             return response.json()
//         }else{
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) =>{
//         return data.puzzle
//     })
// }
    
    

const getCountry = async (countryCode) =>{
    const response = await fetch('https://api.countrylayer.com/v2/all')

        if(response.status === 200){
            const data = await response.json()
            return country = data.find((country) => country.alpha2Code === countryCode)   
        }else{
            throw new Error('Unable to fetch data')
        } 
}

// Shows location according to the local IP from ipinfo.io web site
const getLocation = async () => {
    const res = await fetch('https://ipinfo.io/json?token=8ea45cbd62841a')
    
        if(res.status === 200){ // Status 200 --> OK
            return res.json() // Takes JSON file from web sites
        }else{ // For status 400 and 404 
            throw new Error('Unable to fetch data')
        }
    
}

const getCurrentCountry = async () =>{
    const location = await getLocation()
    return country = await getCountry(location.country)
    
}
