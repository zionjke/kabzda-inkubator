// @flow
import * as React from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from "./AccordionTitle";
import {useState} from "react";

type Props = {
    title: string,
};
export const Accordion = ({title}: Props) => {
    const [visible, setVisible] = useState(true)
    const handleClickVisible = () => {
        setVisible(!visible)
    }
    console.log('Accordion render');
    return (
        <div>
            <AccordionTitle handleClickVisible={handleClickVisible} title={title}/>
            {
                visible && <AccordionBody/>
            }
        </div>
    );
};
