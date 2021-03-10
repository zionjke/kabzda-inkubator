// @flow
import * as React from 'react';

type Props = {
    title: string,
    handleClickVisible: () => void
    color?: string
};
export const AccordionTitle = ({title, handleClickVisible,color}: Props) => {
    console.log('AccordionTitle render');
    return (
        <h3 style={{color: color ? color : 'black'}}
            onClick={handleClickVisible}>{title}</h3>
    );
};
