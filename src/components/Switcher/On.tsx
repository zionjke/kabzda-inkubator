import * as React from 'react';

type Props = {
    switcher: boolean,
    setSwitcher:(switcher:boolean) => void
};
export const On = ({switcher,setSwitcher}: Props) => {
    return (
        <div onClick={() => setSwitcher(true)} className={`on ${switcher ? "green" : ''} `}>
            ON
        </div>
    );
};
