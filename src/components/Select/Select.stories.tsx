import React, {useState} from "react";
import {Select} from "./Select";
import {ItemType} from "../../types/types";
import {action} from "@storybook/addon-actions";
import {CustomSelect} from "./CustomSelect";

export default {
    title: 'Select stories',
    component: Select,
}


export const TestSelect = () => {
    const [items, setItems] = useState<Array<ItemType>>([
        {title: 'First Item', value: 1},
        {title: 'Second Item', value: 2},
        {title: 'Third Item', value: 3},
        {title: 'Four Item', value: 4}
    ])
    const [selectItemValue, setSelectItemValue] = useState<any>()
    return <Select items={items} selectItemValue={selectItemValue} onSelectClick={action('Value changed') }/>
}

export const SelectWithValue = () => {
    return <CustomSelect items={[{title: 'First Item', value: 1},
        {title: 'Second Item', value: 2},
        {title: 'Third Item', value: 3},
        {title: 'Four Item', value: 4}]}
                         onChange={action('value changed')}
                         value={2}/>
}

export const SelectWithOutValue = () => {
    return <CustomSelect items={[{title: 'First Item', value: 1},
        {title: 'Second Item', value: 2},
        {title: 'Third Item', value: 3},
        {title: 'Four Item', value: 4}]}
                         onChange={action('value changed')}
    />
}
