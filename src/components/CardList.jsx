import React, {useEffect, useState} from "react";
import Card from "./Card";

const CardList = () => {
    const [testArray, setTestArray] = useState([]);

    useEffect(() => {
        setTestArray([{name: "Kenny", breed: "bulldog", status: "field", imageURL: "http://cdn.akc.org/content/hero/puppy_pictures_header.jpg", id: "1"}, {name: "Gina", breed: "poodle", status: "bench", imageURL: "http://cdn.akc.org/content/article-body-image/dalmatian_puppy_1.jpg", id: "2"}]);
    }, []);

    return (
        <div id="card-list">
            {
                testArray.map(cardInfo => {
                    return <Card cardInfo={cardInfo} key={cardInfo.id}/>
                })
            }
        </div>
    )
}

export default CardList;