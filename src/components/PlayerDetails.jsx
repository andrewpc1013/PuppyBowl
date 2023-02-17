import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";
import { FetchSinglePlayer } from "../api-adapters";
import { Link, useParams } from "react-router-dom"

const PlayerDetails = () => {
    const [singlePlayerObj, setSinglePlayerObj] = useState({});
    let { playerID } = useParams()

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
        <div className="player-detail">
            <h3>Name:<span>{singlePlayerObj.name}</span></h3>
            <h3>Breed:<span>{singlePlayerObj.breed}</span></h3>
            <h3>Status:<span>{singlePlayerObj.status}</span></h3>
            {/* <h3>Team Name:<span>{singlePlayerObj.team.name}</span></h3> */}
            <img src={singlePlayerObj.imageUrl} height="500px" width="300px"/>
            <div>
                <Link to="/"><button id="back-button">Go Back</button></Link>
            </div>
        </div>
    )
}

export default PlayerDetails;