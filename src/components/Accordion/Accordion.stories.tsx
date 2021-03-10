import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import '../../App.css';
import {ControledAccordion} from "./ControledAccordion";


export default {
    title: 'Accordion stories',
    component: ControledAccordion,
}


export const MenuCollapsed = () => <ControledAccordion title={'Collapsed'}
                                                       handleClickVisible={action('menu collapsed or uncollapsed')}
                                                       visible={false}/>
export const MenuUnCollapsed = () => <ControledAccordion title={'Uncollapsed'}
                                                         handleClickVisible={action('menu collapsed or uncollapsed')}
                                                         visible={true}/>
export const Menu = () => {
    const [visible, setVisible] = useState(true)
    return <ControledAccordion title={'Menu'} handleClickVisible={() => setVisible(!visible)} visible={visible}/>
}
