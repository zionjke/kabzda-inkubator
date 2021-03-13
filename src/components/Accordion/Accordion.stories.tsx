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
    color: ''
}

export const MenuUnCollapsed = Template.bind({})
MenuUnCollapsed.args = {
    title: 'UnCollapsed',
    visible: true,
    handleClickVisible: action('menu collapsed or uncollapsed')
}

const onClickCallback = action('some item was clicked')


export const Menu = () => {
    const [visible, setVisible] = useState(true)
    return <ControledAccordion onItemClick={onClickCallback} items={[
        {title: 'First Item', value: 1},
        {title: 'Second Item', value: 2},
        {title: 'Third Item', value: 3},
        {title: 'Four Item', value: 4}
    ]} title={'Menu'} handleClickVisible={() => setVisible(!visible)} visible={visible}/>
}
