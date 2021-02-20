import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Toolbar.module.css'

function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <Logo />
            <h3>New Question</h3>
            <h3>Leader Board</h3>
        </div>
    )
}

export default Toolbar
