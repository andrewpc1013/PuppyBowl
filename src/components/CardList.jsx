import React, {useEffect, useState} from "react";
import Card from "./Card";
import { fetchAllPlayers } from "../api-adapters";

const CardList = (props) => {
    // const [testArray, setTestArray] = useState([]);
    // const playersArr = props.playersArr
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
        console.log('test')
    },[])

    return (
        <div id="card-list">
            {
                playersArr.map(cardInfo => {
                    return <Card cardInfo={cardInfo} key={cardInfo.id}/>
                })
            }
        </div>
    )
}

export default CardList;