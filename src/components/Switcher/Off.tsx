import * as React from 'react';

type Props = {
    switcher: boolean
    setSwitcher:(switcher:boolean) => void
};
export const Off = ({switcher,setSwitcher}: Props) => {
    return (
        <div onClick={() => setSwitcher(false)} className={`off ${switcher ? "" : 'red'} `}>
            OFF
        </div>
    );
};
