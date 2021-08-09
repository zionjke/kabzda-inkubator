import {useMemo, useState} from "react"

export default {
    title: 'useState demo'
}


export const Example1 = () => {
    const [counter,setCounter] = useState(1)
    return <div>
        <div>
            {counter}
        </div>
        <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </div>
}
