import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from "./components/PageTitle";
import {Rating} from './components/Rating';


function App() {

    const [visibleMenu, setVisibleMenu] = React.useState<boolean>(true);
    const [visibleUserList, setVisibleUserList] = React.useState<boolean>(true);

    const handleClickVisibleMenu = (): void => {
        setVisibleMenu(!visibleMenu)
    };

    const handleClickVisibleUserList = (): void => {
        setVisibleUserList(!visibleUserList)
    };

    console.log('App rendered');
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <Rating value={1}/>
            <Accordion visible={visibleMenu}
                       handleClickVisible={handleClickVisibleMenu}
                       title={'This is Menu'}/>
            <Accordion visible={visibleUserList}
                       handleClickVisible={handleClickVisibleUserList}
                       title={'This is Users List'}/>
            <Rating value={3}/>
        </div>
    );
}


export default App;
