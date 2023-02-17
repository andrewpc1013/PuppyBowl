import React, {useState, useEffect} from "react";
import { Navbar, CardList, PlayerDetails } from "./";
import { fetchAllPlayers } from "../api-adapters";
import { Outlet } from "react-router-dom";

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
            <Navbar playersArr={playersArr}/>
            <div id="container">
                {/* <CardList playersArr={playersArr} /> */}
                <Outlet />
            </div>
        </div>
    )
}

export default Main