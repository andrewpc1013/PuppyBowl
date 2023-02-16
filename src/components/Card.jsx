import React, {useState} from "react";

const Card = (props) => {
    const cardInfo = props.cardInfo;
    console.log(cardInfo);

    return (
        <div id="card">
            <div id="card-header">
                
            </div>
            <div>
                <img src={cardInfo.imageURL} id="puppy-picture"/>
            </div>
            <div id="card-footer">

            </div>
        </div>
    )
}

export default Card;