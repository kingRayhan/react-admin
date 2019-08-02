// import React, { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import Routes from '../../Routes'
import { NavLink } from 'react-router-dom'
const StyledSidebar = styled.div`
    padding: 35px;
    a {
        display: block;
        color: ${tp => tp.theme.dark};
        text-transform: uppercase;
        text-decoration: none;
        font-size: 16px;
        margin-bottom: 15px;
        font-weight: 700;
    }
    a.active {
        color: ${tp => tp.theme.primary};
    }
`

// const StyledSubmenu = styled.div`
//     /* a {
//         margin-bottom: 5px;
//     } */
//     .submenu {
//         padding-left: 25px;
//         margin-top: -13px;
//         a {
//             font-size: 16px;
//             margin-bottom: 5px;
//         }
//     }
// `

// const NavSubmenu = () => {
//     const [isOpen, handle] = useState(false)

//     return (
//         <StyledSubmenu>
//             <a href="#" onClick={() => handle(p => !p)}>
//                 Settings
//             </a>
//             {isOpen && (
//                 <div className="submenu">
//                     <a href="#">Sub Menu</a>
//                     <a href="#">Sub Menu</a>
//                     <a href="#">Sub Menu</a>
//                 </div>
//             )}
//         </StyledSubmenu>
//     )
// }

const Sidebar = () => {
    return (
        <StyledSidebar>
            {Routes.map(({ label, path }, i) => (
                <NavLink key={i} to={path}>
                    {label}
                </NavLink>
            ))}
        </StyledSidebar>
    )
}

export default Sidebar
