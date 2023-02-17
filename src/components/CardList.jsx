import React, {useEffect, useState} from "react";
import Card from "./Card";
import { fetchAllPlayers } from "../api-adapters";

const CardList = (props) => {
    const playersArr = props.playersArr
    const name = props.name
    const breed = props.breed

    return (
        <div id="card-list">
            {   
                playersArr.map(cardInfo => {
                    if(name === '' && breed === ''){
                        return <Card cardInfo={cardInfo} key={cardInfo.id}/>
                    }else if(cardInfo.name.toLowerCase().includes(name.toLowerCase()) && breed === ''){
                        return <Card cardInfo={cardInfo} key={cardInfo.id}/>
                    }else if(name === '' && cardInfo.breed.toLowerCase().includes(breed.toLowerCase())){
                        return <Card cardInfo={cardInfo} key={cardInfo.id}/>
                    }else if(cardInfo.name.toLowerCase().includes(name.toLowerCase()) && cardInfo.breed.toLowerCase().includes(breed.toLowerCase())){
                        return <Card cardInfo={cardInfo} key={cardInfo.id}/>
                    }
                })
            }
        </div>
    )
}

export default CardList;