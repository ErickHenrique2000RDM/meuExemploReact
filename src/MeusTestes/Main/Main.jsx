import React from "react"
import Familia from '../../Components/Familia'
import Membro from '../../Components/Membro'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setNumber} from '../reducers/actionCreatorNum'

const Main = props => {
    return (
        <div>
            <main>Main</main>
            <Familia sobrenome='novo'>
                <Membro nome='Erick'></Membro>
                <Membro nome='paulo'></Membro>
                <Membro nome='fabricia'></Membro>
            </Familia>
            <h2>{props.num}</h2>
            <input type="number" value={props.num} onChange={props.setNumber}></input>
        </div>
    )
}

const mapStateToProps = state => {
    return {num: state.numReducer.num}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setNumber}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)