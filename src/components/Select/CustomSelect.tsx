import * as React from 'react';
import {ItemType} from "../../types/types";

type Props = {
    value?: any
    items: Array<ItemType>
    onChange: (value: any) => void
};
export const CustomSelect: React.FC<Props> = ({items, value, onChange}) => {

    const selectedItem = items.find(item => item.value === value)

    return (
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
            {
                items.map(item => (
                    <div  key={item.value}>
                        {item.title}
                    </div>
                ))
            }
        </div>
    );
};
