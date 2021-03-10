import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import '../../App.css';
import {ControledAccordion, ControledAccordionProps} from "./ControledAccordion";
import {Story} from "@storybook/react/types-6-0";


export default {
    title: 'Accordion stories',
    component: ControledAccordion,
    argTypes: {
        color: {
            control: 'color'
        }
    }
}

const Template: Story<ControledAccordionProps> = (args: ControledAccordionProps) => <ControledAccordion {...args}/>


export const MenuCollapsed = Template.bind({})
MenuCollapsed.args = {
    title: 'Collapsed',
    visible: false,
    handleClickVisible: action('menu collapsed or uncollapsed'),
}

export const MenuUnCollapsed = Template.bind({})
MenuUnCollapsed.args = {
    title: 'UnCollapsed',
    visible: true,
    handleClickVisible: action('menu collapsed or uncollapsed')
}


export const Menu = () => {
    const [visible, setVisible] = useState(true)
    return <ControledAccordion title={'Menu'} handleClickVisible={() => setVisible(!visible)} visible={visible}/>
}
