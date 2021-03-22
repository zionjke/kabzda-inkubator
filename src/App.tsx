import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from "./components/PageTitle";
import {Rating} from './components/Rating/Rating';
import {Switcher} from "./components/Switcher/Switcher";
import {ControledAccordion} from "./components/Accordion/ControledAccordion";
import {ControledSwitcher} from "./components/Switcher/ControledSwitcher";
import {ControledRating} from "./components/Rating/ControledRating";
import {ItemType} from "./types/types";
import {Select} from "./components/Select/Select";


function App() {
    const [items, setItems] = useState<Array<ItemType>>([
        {title: 'First Item', value: 1},
        {title: 'Second Item', value: 2},
        {title: 'Third Item', value: 3},
        {title: 'Four Item', value: 4}
    ])
    const [visible, setVisible] = useState(true)
    const [switcher, setSwitcher] = useState<boolean>(false);
    const [starSelected, setStarSelected] = useState<number>(4);
    const [itemValue, setItemValue] = useState<any>()
    const [selectItemValue, setSelectItemValue] = useState<any>()

    const handleClickVisible = () => {
        setVisible(!visible)
    }

    console.log('App rendered');
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <ControledAccordion visible={visible}
                                items={items}
                                handleClickVisible={handleClickVisible}
                                onItemClick={setItemValue}
                                title={'This is Menu'}/>
            {/*<Rating stars={5}/>*/}
            <ControledRating starSelected={starSelected}
                             setStarSelected={setStarSelected}
                             stars={7}/>
            <ControledSwitcher switcher={switcher}
                               setSwitcher={setSwitcher}/>
            {/*<Switcher/>*/}
            <Select items={items}
                    selectItemValue={selectItemValue}
                    onSelectClick={setSelectItemValue}/>
            <Accordion title={'Test'}/>

        </div>
    );
}


export default App;
