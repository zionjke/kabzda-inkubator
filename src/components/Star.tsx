import * as React from 'react';

type Props = {
    selected?: boolean
    onClick: any
};
export const Star = ({selected, onClick}: Props) => {
    console.log('Star render');
    return (
        <span onClick={onClick} className={selected ? 'starSelected' : 'star'}>Star</span>
    );
};
