import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {PageOne} from './pages/PageOne'
import {PageThree} from './pages/PageThree'
import {PageTwo} from './pages/PageTwo'
import {Error404} from './pages/Error404'
import {Page} from './pages/Page'


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'/page/0'}>Page1</NavLink></div>
                    <div><NavLink to={'/page/1'}>Page2</NavLink></div>
                    <div><NavLink to={'/page/2'}>Page3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/1'}/>}/>

                        <Route path={'/page/:id'} element={<Page/>}/>


                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

