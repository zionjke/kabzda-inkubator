// @flow
import * as React from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from "./AccordionTitle";
import {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";

type Props = {
    title: string,
};

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-VISIBLE') {
        return !state
    }
    return state
}

export const Accordion = ({title}: Props) => {

    // const [visible, setVisible] = useState(true)
    const [visible, dispatch] = useReducer(reducer, false)


    // const handleClickVisible = () => {
    //     setVisible(!visible)
    // }

    const handleClickVisible = () => {
        dispatch({type: 'TOGGLE-VISIBLE'})
    }

    console.log('Accordion render');
    return (
        <div>
            {/*<AccordionTitle handleClickVisible={handleClickVisible} title={title}/>*/}
            <AccordionTitle handleClickVisible={handleClickVisible} title={title}/>
            {
                visible && <AccordionBody items={[{title: '1', value: '1'}]} onItemClick={() => alert('yo')}/>
            }
        </div>
    );
};
