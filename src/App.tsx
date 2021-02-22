import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from "./components/PageTitle";
import {Rating} from './components/Rating';
import {Switcher} from "./components/Switcher/Switcher";


function App() {
    console.log('App rendered');
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <Accordion title={'This is Menu'}/>
            <Accordion title={'This is Users List'}/>
            <Rating stars={5}/>
            <Switcher/>
        </div>
    );
}


export default App;
