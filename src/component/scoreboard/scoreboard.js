import React from 'react';
import classes from './scoreboard.module.css'
const scoreboard = (props) => {
	return ( 
		<center className={classes.Scoreboard}>
			<span>Score: 0</span>
			<span>Best: 0</span>
			<div onClick={props.clicked}>New Game</div>
		</center>
	 );
}
 
export default scoreboard;