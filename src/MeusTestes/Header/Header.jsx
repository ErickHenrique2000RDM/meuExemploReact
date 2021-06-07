import React from "react"
import './Header.css'
import {Link} from 'react-router-dom'

export default props => {
    return (
        <div className='conteudoHeader'>
            <header>
                
                    <h3><Link to='/'>Header</Link></h3>
                
            </header>
        </div>
    )
}