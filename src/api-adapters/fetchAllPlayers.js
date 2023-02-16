 const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players'

 const fetchAllPlayers = async ()=>{
    try {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        return result.data.players
    } catch (error) {
        console.log(error)
    }
}

export default fetchAllPlayers
