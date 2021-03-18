import * as React from 'react';
import {ItemType} from "../../types/types";
import style from './CustomSelect.module.css'
import {useState, KeyboardEvent} from "react";

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

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].title === hoveredItemEl) {
                setHoveredItem(items[i + 1].title)
                break;
            }

        }
    }


    return (
        <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span onClick={onActive}>{value}</span>
            {
                active &&
                <div className={style.items}>
                    {
                        items.map(item => (
                            <div
                                onMouseEnter={() => setHoveredItem(item.title)}
                                className={`${style.item} ${hoveredItem === item ? style.selected : ''}`}
                                onClick={() => onValueItem(item.title)}
                                key={item.value}>
                                {item.title}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};
