import React, { Component,Fragment } from 'react';
import Board from '../../component/Board/Board'
import emptyBoard from '../../utility/emptyboard';

class BoardControl extends Component {
	// funtion to added 2/4 randomly on the board
	addNumber=(board)=>{
		let option=[];
		for(let i =0;i<4;i++){
			for(let k=0;k<4;k++){
				if(board[i][k]===0)
				option.push({x:i,y:k})	;
			}
		}
		const pick = option[Math.floor(Math.random()*option.length)];
		const newNumber = Math.random()>0.5?2:4;
		board[pick.x][pick.y]=newNumber;
		return board;
				
	}
	constructor(props){
		super(props);
		this.state = {
			Board:this.addNumber(emptyBoard()),
			test:0
		}
	}
	componentDidMount(){
		
	}
	render() { 
		return (
	<Fragment> 
	        <h1>2048</h1>
    	        <h3>score,restart</h3>
		<Board board={this.state.Board} />
    	</Fragment> 
    );
	}
}
 
export default BoardControl;