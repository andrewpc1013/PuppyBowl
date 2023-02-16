import React, {useEffect, useState} from "react";
import Card from "./Card";

const CardList = (props) => {
    const [testArray, setTestArray] = useState([]);
    const playersArr = props.playersArr
    console.log(playersArr)
    useEffect(() => {
        setTestArray([{name: "Kenny", breed: "bulldog", status: "field", imageURL: "http://cdn.akc.org/content/hero/puppy_pictures_header.jpg", id: "#1111"}, {name: "Gina", breed: "poodle", status: "bench", imageURL: "http://cdn.akc.org/content/hero/puppy_pictures_header.jpg", id: "#5555"}]);
    }, []);

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