import React, {useState} from "react";

const Card = (props) => {
    const cardInfo = props.cardInfo;

    return (
        <div id="card">
            <div id="card-header">
                <h5 className="puppy-name">{cardInfo.name}</h5>
                <h5 className="puppy-id">#{cardInfo.id}</h5>
            </div>
            <div id="images">
                <img src={cardInfo.imageUrl} id="puppy-picture"/>
            </div>
            <div id="card-footer">
                <button>See Details</button>
                <button>Delete from Roster</button>
            </div>
        </div>
    )
}

export default Card;