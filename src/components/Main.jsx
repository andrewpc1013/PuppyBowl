import React, {useState, useEffect} from "react";
import { Navbar, CardList, PlayerDetails } from "./";
import { fetchAllPlayers } from "../api-adapters";

const Main = () => {
    const [playersArr, setPlayersArr] = useState([])
    
    async function getAllPlayers(){
        try {
            const data = await fetchAllPlayers()
            setPlayersArr(data)
            
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(()=>{
        getAllPlayers()
    },[])
    
    return(
        <div id="main">
            <Navbar />
            <div id="container">
                {
                    true ?
                    <PlayerDetails /> :
                    <CardList playersArr={playersArr}/> 
                }
            </div>
        </div>
    )
}

export default Main