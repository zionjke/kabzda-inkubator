import * as React from 'react';

type Props = {
    selected?: boolean
    onClick: () => void
};
export const Star = ({selected, onClick}: Props) => {
    console.log('Star render');
    console.log(selected)
    return (
        <span onClick={onClick} className={selected ? 'starSelected' : 'star'}>Star</span>
    );
};
