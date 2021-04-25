import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Detailed from '../Detailed'
import classes from './Vote.module.css'
import {voteHandler} from '../../../redux/slices/EntirePoolSlice'


function Vote(props) {
    const [selectedOption, setselectedOption] = useState("")
    const [disbale, setdisbale] = useState(true)
    const dispatch = useDispatch()

    const onValueChange = (e) => {
        setselectedOption(e.target.value)
        setdisbale(false)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(voteHandler({id: props.location.state.id, selectedOption: selectedOption, voter: props.location.state.dummyLogin}))
        props.history.push("/")
    }

    return (
        <div className={classes}>
            <Detailed dummyLogin={props.location.state.dummyLogin}>
                <form onSubmit={onSubmitHandler}>
                    <div><label><input type="radio" name="radioInput" onChange={onValueChange} value="optionOne"/> {props.location.state.option1} </label></div>
                    <div><label><input type="radio" name="radioInput" onChange={onValueChange} value="optionTwo"/> {props.location.state.option2} </label></div>
                    <button type="submit" disabled={disbale}>Submit</button>
                </form>
            </Detailed>  
        </div>
    )
}

export default Vote
