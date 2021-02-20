import React from 'react'
import Button from '../UI/Button/Button'
import profilepic from '../../assets/Logo/wouldyouratherlogo.jpg'
import classes from './SinglePoll.module.css'

function SinglePoll(props) {
    return (
        <div className={classes.SinglePoll}>
            <div >
                <img className={classes.item_1} src={profilepic} alt="profilepic" />
            </div>
            <div className={classes.item_2}>
                <h1>Would you rather</h1>
                <p >Option 1: <b> {props.optionOne} </b> </p>
                <p >or</p>
                <p >Option 2: <b> {props.optionTwo} </b> </p>
                
                <p >By: {props.author}</p>
                <Button >Results</Button>
            </div>
        </div>
    )
}

export default SinglePoll
