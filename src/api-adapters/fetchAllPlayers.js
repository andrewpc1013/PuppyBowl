export const fetchAllPlayers = async ()=>{
    const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players'

    try {
        const response = await fetch(BASE_URL)
        const result = await response.json()
        return result.data.players
    } catch (error) {
        console.log(error)
    }
}