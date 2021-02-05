// @flow
import * as React from 'react';
import {Star} from "./Star";

type Props = {
    value: number
};
export const Rating = ({value}: Props) => {
    console.log('Rating render');
    switch (value) {
        case 1: {
            return (
                <div>
                    <Star selected/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
            )
        }
        case 2: {
            return (
                <div>
                    <Star selected/>
                    <Star selected/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
            )
        }
        case 3: {
            return (
                <div>
                    <Star selected/>
                    <Star selected/>
                    <Star selected/>
                    <Star/>
                    <Star/>
                </div>
            )
        }
        case 4: {
            return (
                <div>
                    <Star selected/>
                    <Star selected/>
                    <Star selected/>
                    <Star selected/>
                    <Star/>
                </div>
            )
        }
        case 5: {
            return (
                <div>
                    <Star selected/>
                    <Star selected/>
                    <Star selected/>
                    <Star selected/>
                    <Star selected/>
                </div>
            )
        }
        default: {
            return (
                <div>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
            )
        }
    }
};
