import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";
import { FetchSinglePlayer } from "../api-adapters";

const PlayerDetails = () => {
    const [singlePlayerObj, setSinglePlayerObj] = useState({});
    const location = useLocation().pathname;
    const playerID = location.replace("/player/", "");

    async function getPlayer(){
        try {
            const data = await FetchSinglePlayer(playerID)
            setSinglePlayerObj(data)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(()=>{
        getPlayer()
    },[])

    return(
        <div>
            <h3 className="player-detail">Name:<span>{singlePlayerObj.name}</span></h3>
        </div>
    )
}

export default PlayerDetails;