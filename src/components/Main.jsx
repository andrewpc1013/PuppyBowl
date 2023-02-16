import React, {useState, useEffect} from "react";
import { Navbar, CardList } from "./";
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
            <CardList playersArr={playersArr}/>
        </div>
    )
}

export default Main