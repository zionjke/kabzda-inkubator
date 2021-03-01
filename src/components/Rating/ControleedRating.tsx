import * as React from 'react';
import {Star} from "../Star";


type Props = {
    stars: number
    starSelected: number
    setStarSelected:(starSelected:number) => void
};

export const ControleedRating = ({stars,starSelected,setStarSelected}: Props) => {

    console.log('Rating render');
    return (
        <div>
            {
                [...Array(stars)].map((s, i) => (
                    <Star key={i}
                          selected={i < starSelected}
                          onClick={() => setStarSelected(i + 1)}/>
                ))
            }
        </div>
    )
};
