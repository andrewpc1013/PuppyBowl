import fetchAllPlayers from "./fetchAllPlayers";
import { Card } from "../components";

const FetchSinglePlayer = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${singleID}`)
        const result = await response.json()
        return result.data.players
    } catch (error) {
        console.log(error)
    }
}

export default FetchSinglePlayer;