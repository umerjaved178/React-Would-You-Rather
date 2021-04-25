import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Toolbar.module.css'
import { Link, NavLink } from 'react-router-dom'

function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.Logo}> <Link to='/'><Logo /></Link></div>
            <div className={classes.NavLink} >
                <NavLink exact to='/new-question' activeClassName={classes.active}> New Question </NavLink>
            </div>
            <div className={classes.NavLink}>
                <NavLink exact to='/leader-board' activeClassName={classes.active}> Leader Board </NavLink>
            </div>
        </div>
    )
}

export default Toolbar
