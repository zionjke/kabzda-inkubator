import React, {useState} from "react";
import {ControledRating} from "./ControledRating";
import '../../App.css';


export default {
    title: 'Rating stories',
    component: ControledRating,
}

export const EmptyStars = () => <ControledRating stars={4} starSelected={0} setStarSelected={a => a}/>
export const RatingOne = () => <ControledRating stars={4} starSelected={1} setStarSelected={a => a}/>
export const RatingTwo = () => <ControledRating stars={4} starSelected={2} setStarSelected={a => a}/>
export const RatingThree = () => <ControledRating stars={4} starSelected={3} setStarSelected={a => a}/>
export const RatingFour = () => <ControledRating stars={4} starSelected={4} setStarSelected={a => a}/>
export const RatingFive = () => <ControledRating stars={5} starSelected={5} setStarSelected={a => a}/>
export const ChangeRating = () => {
    const [starSelected, setStarSelected] = useState<number>(4);
    return (
        <ControledRating stars={5} starSelected={starSelected} setStarSelected={setStarSelected}/>
    )
}


