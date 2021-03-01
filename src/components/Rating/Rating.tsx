import * as React from 'react';
import {Star} from "../Star";
import {useState} from "react";

type Props = {
    stars: number
};

export const Rating = ({stars}: Props) => {
    const [starSelected, setStarSelected] = useState(0);
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
