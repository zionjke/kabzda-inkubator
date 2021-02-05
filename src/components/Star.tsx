// @flow
import * as React from 'react';

type Props = {
    selected?: boolean
};
export const Star = ({selected}: Props) => {
    console.log('Star render');
    return (
        selected
            ? <span><b>Star </b> </span>
            : <span>Star </span>
    );
};
