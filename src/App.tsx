import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from "./components/PageTitle";
import {Rating} from './components/Rating/Rating';
import {Switcher} from "./components/Switcher/Switcher";
import {ControledAccordion} from "./components/Accordion/ControledAccordion";
import {ControledSwitcher} from "./components/Switcher/ControledSwitcher";
import {ControleedRating} from "./components/Rating/ControleedRating";


function App() {

    const [visible, setVisible] = useState(true)
    const [switcher, setSwitcher] = useState<boolean>(false);
    const [starSelected, setStarSelected] = useState(0);

    const handleClickVisible = () => {
        setVisible(!visible)
    }

    console.log('App rendered');
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <ControledAccordion visible={visible}
                                handleClickVisible={handleClickVisible}
                                title={'This is Menu'}/>
            <Accordion title={'This is Users List'}/>
            <Rating stars={5}/>
            <ControleedRating starSelected={starSelected }
                              setStarSelected={setStarSelected}
                              stars={7}/>
            <ControledSwitcher switcher={switcher}
                               setSwitcher={setSwitcher}/>
            <Switcher/>
        </div>
    );
}


export default App;
