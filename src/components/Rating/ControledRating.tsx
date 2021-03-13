import  React from 'react';
import {Star} from "./Star";


type Props = {
    stars: number
    starSelected: number
    setStarSelected: (starSelected: number) => void
};

export const ControledRating = ({stars, starSelected, setStarSelected}: Props) => {

    console.log('Rating render');
    return (
        <div>
            {
                [...Array(stars)].map((s, i) => (
                    // <span onClick={() => setStarSelected(i + 1)}
                    //       className={i < starSelected ? 'starSelected' : 'star'}>Star</span>
                    <Star key={i}
                          selected={i < starSelected}
                          onClick={() => setStarSelected(i + 1)}/>
                ))
            }
        </div>
    )
};
