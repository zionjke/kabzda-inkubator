import * as React from 'react';
import {ItemType} from "../../types/types";

type Props = {
    items: Array<ItemType>
    selectItemValue: any
    onSelectClick: (value: any) => void
};
export const Select: React.FC<Props> = ({items,selectItemValue,onSelectClick}) => {
    return (
        <div>
            <select value={selectItemValue} onChange={(e) => onSelectClick(e.currentTarget.value)}>
                {
                    items.map((item, i) => (
                        <option key={i} value={item.value}>{item.title}</option>
                    ))
                }
            </select>
            <span> value: {selectItemValue}</span>
        </div>

    );
};
