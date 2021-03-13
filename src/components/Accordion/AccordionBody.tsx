import * as React from 'react';
import {ItemType} from "../../types/types";

type Props = {
    items: Array<ItemType>
    onItemClick:(listValue:any) => void
};
export const AccordionBody: React.FC<Props> = ({items,onItemClick}) => {
    console.log('AccordionBody render');
    return (
        <ul>
            {
                items.map((item,i) => (
                        <li onClick={() => onItemClick(item.value)} key={i}>
                            <span>{item.title}</span> - <span>{item.value}</span>
                        </li>
                    )
                )
            }
        </ul>
    );
};
