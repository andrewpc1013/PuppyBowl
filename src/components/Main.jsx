import React, {useState, useEffect} from "react";
import { Navbar, CardList, PlayerDetails } from "./";
import { fetchAllPlayers } from "../api-adapters";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    const [playersArr, setPlayersArr] = useState([])
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    
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
            <Navbar playersArr={playersArr} name={name} breed={breed} setName={setName} setBreed={setBreed} />
            <div id="container">
                <Routes>
                    <Route exact path="/" element={<CardList playersArr={playersArr} setPlayersArr={setPlayersArr} name={name} breed={breed}/>}/>
                    <Route path="/player/:playerID" element={<PlayerDetails/>}/> 
                </Routes>
            </div>
        </div>
    )
}

export default Main