import React from 'react'
import { Link } from "react-router-dom";
import Mode from './Mode';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/Home">HOME</Link></li>
                    <li><Link to="/skills">SKILLS</Link></li>
                    <li><Link to="/contacts">CONTACT</Link></li>


                </ul>

            </nav>
        </div >
    )
}
