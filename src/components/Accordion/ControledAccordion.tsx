import * as React from 'react';
import { ItemType } from '../../types/types';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from "./AccordionTitle";


export type ControledAccordionProps = {
    title: string,
    handleClickVisible: () => void,
    visible: boolean
    color?: string
    items: Array<ItemType>
    onItemClick:(listValue:any) => void
};
export const ControledAccordion = ({title, visible, handleClickVisible, color, items,onItemClick}: ControledAccordionProps) => {

    console.log('Accordion render');
    return (
        <div>
            <AccordionTitle color={color} handleClickVisible={handleClickVisible} title={title}/>
            {
                visible && <AccordionBody onItemClick={onItemClick} items={items}/>
            }
        </div>
    );
};
