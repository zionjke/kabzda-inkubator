// @flow
import * as React from 'react';
import {Star} from "./Star";

type Props = {
    value: number
};
export const Rating = ({value}: Props) => {
    console.log('Rating render');
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
};
