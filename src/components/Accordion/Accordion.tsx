import * as React from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from "./AccordionTitle";
import {useReducer, useState} from "react";
import {reducer, TOGGLE_VISIBLE} from './reducer';


type Props = {
    title: string,
};


export const Accordion = ({title}: Props) => {

    // const [visible, setVisible] = useState(true)
    const [state, dispatch] = useReducer(reducer, {visible: false})


    // const handleClickVisible = () => {
    //     setVisible(!visible)
    // }

    const handleClickVisible = () => {
        dispatch({type: TOGGLE_VISIBLE})
    }

    console.log('Accordion render');
    return (
        <div>
            {/*<AccordionTitle handleClickVisible={handleClickVisible} title={title}/>*/}
            <AccordionTitle handleClickVisible={handleClickVisible} title={title}/>
            {
                state.visible && <AccordionBody items={[{title: '1', value: '1'}]} onItemClick={() => alert('yo')}/>
            }
        </div>
    );
};
