
import * as React from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from "./AccordionTitle";


export type ControledAccordionProps = {
    title: string,
    handleClickVisible: () => void,
    visible:boolean
    color?: string
};
export const ControledAccordion = ({title,visible,handleClickVisible,color}: ControledAccordionProps) => {

    console.log('Accordion render');
    return (
        <div>
            <AccordionTitle color={color} handleClickVisible={handleClickVisible} title={title}/>
            {
                visible && <AccordionBody/>
            }
        </div>
    );
};
