import React from 'react';
import {PagesType} from '../../data/dataState';
import {useParams} from 'react-router-dom';
import {Content} from './Content'
import {Error404} from './Error404'

type PropsType = {
    pages: PagesType[];
};

export const Page = (props: PropsType) => {
    const params = useParams();
    let magicNumber = Number(params.id)
    // console.log(magicNumber)
    return (
        <div>
            {magicNumber <= props.pages.length - 1
                ? <Content heading={props.pages[magicNumber].heading} pages={props.pages[magicNumber].about}/>
                : <Error404/>
            }


        </div>
    );
};

