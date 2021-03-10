import React, {useState} from "react";
import {ControledSwitcher} from "./ControledSwitcher";
import {action} from "@storybook/addon-actions";
import '../../App.css';


export default {
    title: 'Switcher stories',
    component: ControledSwitcher,
}


export const Off = () => <ControledSwitcher switcher={false} setSwitcher={action('clicked on or off')}/>
export const On = () => <ControledSwitcher switcher={true} setSwitcher={action('clicked on or off')}/>
export const SwitchOnOff = () => {
    const [switcher, setSwitcher] = useState<boolean>(false);
    return <ControledSwitcher switcher={switcher} setSwitcher={setSwitcher}/>
}

