import React from "react";
import Card from "./Card";

const CardList = (props) => {
    const playersArr = props.playersArr
    const name = props.name
    const breed = props.breed

    return (
        <div id="card-list">
            {   
                playersArr.map(cardInfo => {
                    const searchName = name.toLowerCase();
                    const searchBreed = breed.toLowerCase();
                    const cardName = cardInfo.name.toLowerCase();
                    const cardBreed = cardInfo.breed.toLowerCase();

                    if(cardName.includes(searchName) && cardBreed.includes(searchBreed)){
                        return <Card cardInfo={cardInfo} key={cardInfo.id}/>
                    }
                })
            }
        </div>
    )
}

export default CardList;