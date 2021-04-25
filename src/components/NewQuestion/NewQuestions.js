import React, { useState } from 'react'
import classes from './NewQuestions.module.css'
import axios from '../../axios-instance'
import { Redirect } from 'react-router'

function NewQuestions(props) {
    const [option_1, setoption_1] = useState("")
    const [option_2, setoption_2] = useState("")

    const onChangeHandler_1 = (e) => {
        setoption_1(e.target.value)
    }
    const onChangeHandler_2 = (e) => {
        setoption_2(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const order = {
                author: 'sarahedo',
                timestamp: new Date().getTime(),
                optionOne: {
                  votes: [''],
                  text: option_1,
                },
                optionTwo: {
                  votes: [''],
                  text: option_2,
                }
              }
        axios.post('/questions.json', order)
        .then(response => {
            props.history.push('/')
        })
        .catch((err)=> {
            console.log("error", err)
        })
    }
    
    return (
        <div className={classes.outer}>
            <h4>Ask a New Question to Audience</h4>
            <form onSubmit={onSubmitHandler}>
                <div><label>Option 1</label></div>
                <div><input className={classes.input} value={option_1} onChange={onChangeHandler_1}/></div>
                <div><label>Option 1</label></div>
                <div><input className={classes.input} value={option_2} onChange={onChangeHandler_2}/></div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewQuestions
