import * as React from 'react';
import {Off} from './Off';
import {On} from "./On";
import {useState} from "react";

type Props = {
    switcher:boolean
    setSwitcher:(switcher:boolean) => void
};

export const ControledSwitcher:React.FC<Props> = ({switcher,setSwitcher}) => {

    return (
        <div className='switcher_container'>
            <div className='switcher'>
                <On setSwitcher={setSwitcher} switcher={switcher}/>
                <Off setSwitcher={setSwitcher} switcher={switcher}/>
            </div>
            <div className={`circle ${switcher ? 'green' : 'red'}`}>

            </div>
        </div>
    );
};
