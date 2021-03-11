import React, {useState} from 'react';


export default {
    title: 'Example/Input',
    // component: input,
}


export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')
    return <input value={value} onChange={(event) => setValue(event.currentTarget.value)}/>
}

export const ControledSelect = () => {
    const [value, setValue] = useState<string | undefined >("Kiev")
    return <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        <option value="">none</option>
        <option value="Minsk">Minsk</option>
        <option value="Kiev">Kiev</option>
        <option value="Moskow">Moskow</option>
    </select>
}
