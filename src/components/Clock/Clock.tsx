import React, {useEffect, useState} from 'react';

type Props = {};

export const Clock: React.FC<Props> = (props: Props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    // let secondStrings = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

    const timeWithZero = (time: number) => {
        return time < 10 ? `0${time}` : time
    }

    return (
        <div>
            <span>{timeWithZero(date.getHours())}</span>
            : <span>{timeWithZero(date.getMinutes())}</span>
            : <span>{timeWithZero(date.getSeconds())}</span>
        </div>
    );
};
