import * as React from 'react';
import {ItemType} from "../../types/types";
import style from './CustomSelect.module.css'
import {useState} from "react";

type Props = {
    value: any
    items: Array<ItemType>
    onChange: (value: any) => void
};
export const CustomSelect: React.FC<Props> = ({items, value, onChange}) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredItemEl, setHoveredItem] = useState(value)

    const onActive = () => setActive(!active)

    const hoveredItem = items.find(item => item.title === hoveredItemEl)


    const onValueItem = (value: any) => {
        onChange(value)
        setActive(!active)
    }


    return (
        <div className={style.select}>
            <span onClick={onActive}>{value}</span>
            <div className={style.items}>
                {
                    active && items.map(item => (
                        <div className={`${style.item} ${item.title === value && style.selected}`}
                             onClick={() => onValueItem(item.title)}
                             key={item.value}>
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
