
import * as React from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from "./AccordionTitle";


type Props = {
    title: string,
    handleClickVisible: () => void,
    visible:boolean
};
export const ControledAccordion = ({title,visible,handleClickVisible}: Props) => {

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
