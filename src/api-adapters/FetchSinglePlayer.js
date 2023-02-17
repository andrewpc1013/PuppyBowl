import { Card } from "../components";

const FetchSinglePlayer = async (id) => {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players/${id}`)
        const result = await response.json()
        console.log(result.data.player)
        return result.data.player
    } catch (error) {
        console.log(error)
    }
}

export default FetchSinglePlayer;