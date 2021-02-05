// @flow
import * as React from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from "./AccordionTitle";

type Props = {
    title: string,
    visible: boolean,
    handleClickVisible: () => void
};
export const Accordion = ({title, visible, handleClickVisible}: Props) => {
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
