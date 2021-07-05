import React from 'react';
import classes from './cell.module.css'
const cell  = (props) => {
	return ( 
		<div className={classes.Cell}>{props.val}</div>
	);
}
 
export default cell ;