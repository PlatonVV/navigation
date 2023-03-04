import React from 'react';
import {PagesType} from '../../data/dataState'
import {useParams} from 'react-router-dom'

type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {
    const params = useParams()
    return (
        <div>
            <div>{props.pages[Number(params.id)].heading}</div>
            <div>{props.pages[Number(params.id)].about}</div>
        </div>
    );
};

