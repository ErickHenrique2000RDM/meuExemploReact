import React from "react"
import {Link} from 'react-router-dom'
import './Nav.css'

export default props => {
    return (
        <>
            <nav><h3>Navegação</h3></nav>
            <div className="itemMenu">
                <Link to="/"><p>Home</p></Link>
            </div>
            <div className="itemMenu">
                <Link to="/sobre"><p>Sobre</p></Link>                
            </div>
            

        </>
    )
}