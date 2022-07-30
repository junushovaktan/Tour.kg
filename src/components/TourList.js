import TourItem from './TourItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './TourList.module.css'

export default function TourList() {
    

    const [tours, setTours] = useState([])

    function getData() {
        
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => setTours(response.data))
    }

    useEffect(getData, [])

    function items(element, index) {
        return <TourItem key={index} tourName={element.title}/>
    }


    return (
        <div>
            <h2 className={classes.h2}>Список туров:</h2>
            <ul className={classes.list}>
                {tours.map(items)}
            </ul>
        </div>
    )
}