import React from 'react'
import classes from'./Button.module.css'

function Button(props) {
    return (
        <div className={classes.Button}>
            {props.children}
        </div>
    )
}

export default Button
