import React, {useState} from "react";
import {FetchSinglePlayer} from "../api-adapters/";
import PlayerDetails from "./PlayerDetails";
import { Outlet, Link } from "react-router-dom";

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
                <Link to={`/player/${cardInfo.id}`}><button>See Details</button></Link>
            </div>
        </div>
    )
}

export default Card;