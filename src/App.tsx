import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from "./components/PageTitle";
import {Rating} from './components/Rating';
import {Switcher} from "./components/Switcher/Switcher";
import {ControledAccordion} from "./components/Accordion/ControledAccordion";


function App() {

    const [visible, setVisible] = useState(true)

    const handleClickVisible = () => {
        setVisible(!visible)
    }

    console.log('App rendered');
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <ControledAccordion visible={visible} handleClickVisible={handleClickVisible} title={'This is Menu'}/>
            <Accordion title={'This is Users List'}/>
            <Rating stars={5}/>
            <Rating stars={8}/>
            <Switcher/>
            <Switcher/>
            <Switcher/>
        </div>
    );
}


export default App;
