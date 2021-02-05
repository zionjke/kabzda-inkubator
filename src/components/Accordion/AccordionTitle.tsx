// @flow
import * as React from 'react';

type Props = {
    title: string,
    handleClickVisible: () => void
};
export const AccordionTitle = ({title,handleClickVisible}: Props) => {
    console.log('AccordionTitle render');
    return (
        <h3 onClick={handleClickVisible}>{title}</h3>
    );
};
