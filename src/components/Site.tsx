import React, {useEffect, useState} from 'react';
import styles from './Site.module.css';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './pages/Error404';
import {dataState} from '../data/dataState';
import {Page} from './pages/page';
import styled from 'styled-components'
import {useWindowSize} from '../helpers/useWindowSize'

export const Site = () => {
        // const [burger, setBurger] = useState(false)
        // const [windowSize, setWindowSize] = useState(0);
        // useEffect(() => {
        //
        //     function handleResize() {
        //
        //         setWindowSize(window.innerWidth);
        //     }
        //
        //     window.addEventListener('resize', handleResize);
        //     handleResize();
        //     return () => window.removeEventListener('resize', handleResize);
        // }, []); // Empty array ensures that effect is only run on mount

        let windowSize = useWindowSize();
        return (
            <div>
                <div className={styles.header}>
                    <h1>HEADER</h1>
                </div>
                <div className={styles.body}>
                    {
                        windowSize > 1000
                            ? <div className={styles.nav}>
                                <NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></NavWrapper>
                                <NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></NavWrapper>
                                <NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></NavWrapper>
                                {/*<div><NavLink to={'/page/2'}*/}
                                {/*              className={({isActive}) => isActive ? styles.active : styles.navLink}>Page3</NavLink>*/}
                                {/*</div>*/}
                            </div>
                            : <div></div>
                    }

                    <div className={styles.content}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={'page/0'}/>}/>
                            <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                            <Route path={'/*'} element={<Error404/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
;

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue;
  }

`


//------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import styles from "./Site.module.css";
// import { Navigate, NavLink, Route, Routes } from "react-router-dom";
// import { PageOne } from "./pages/PageOne";
// import { PageTwo } from "./pages/PageTwo";
// import { PageThree } from "./pages/PageThree";
// import { Error404 } from "./pages/Error404";
//
// export const Site = () => {
//   return (
//     <div>
//       <div className={styles.header}>
//         <h1>HEADER</h1>
//       </div>
//       <div className={styles.body}>
//         <div className={styles.nav}>
//           <div>
//             <NavLink
//               to={"/page1"}
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Page1
//             </NavLink>
//           </div>
//           <div>
//             <NavLink
//               to={"/page2"}
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Page2
//             </NavLink>
//           </div>
//           <div>
//             <NavLink
//               to={"/page3"}
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.navLink
//               }
//             >
//               Page3
//             </NavLink>
//           </div>
//         </div>
//         <div className={styles.content}>
//           <Routes>
//             <Route path={"/"} element={<Navigate to={"page1"} />} />
//
//             <Route path={"/page1"} element={<PageOne />} />
//             <Route path={"/page2"} element={<PageTwo />} />
//             <Route path={"/page3"} element={<PageThree />} />
//             <Route path={"/*"} element={<Error404 />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };
