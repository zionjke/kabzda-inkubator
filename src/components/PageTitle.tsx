// @flow
import * as React from 'react';

type Props = {
    title:string
};
export const PageTitle = ({title}: Props) => {
    console.log('PageTitle render');
    return (
        <h1>{title}</h1>
    );
};
