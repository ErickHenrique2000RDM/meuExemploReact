import React from 'react'
import Header from '../MeusTestes/Header/Header'
import Nav from '../MeusTestes/Nav/Nav'
import Main from '../MeusTestes/Main/Main'
import Footer from '../MeusTestes/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import Routes from '../MeusTestes/routes/Routes'
import './App.css'

export default props => {
    return (
        <BrowserRouter>
            <div className="content">
                <div className="cabecalho" >
                    <Header  />
                </div>
                <div className='navegacao' >
                    <Nav />
                </div>
                <div className='conteudo' >
                    {/*<Main />*/}
                    <Routes></Routes>
                </div>
                <div className='rodape' >
                    <Footer className='centralizado' />
                </div>
            </div>
        </BrowserRouter>
    )
}