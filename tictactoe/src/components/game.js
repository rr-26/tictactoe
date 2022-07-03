import React from "react";
import Board from "./board";

export default class Game extends React.Component{

    constructor(props){
        
        super(props) //everytime when we call a constructor it is madatory to call super()
        // console.log(this)
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                {squares: Array(9).fill(null)}
            ]
        }
    }

    handleClick = (i) => {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares;

        const winner = calculateWinner(squares)

        if(winner || squares[i]){
            return
        }

        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({
            history: history.concat({
                squares:squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })

    }

    render(){
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares;

        let status
        let winner = calculateWinner(squares)
        if(winner) {
            status = 'Winner is : ' + winner
        }
        else{
            status = 'next player is : '+ (this.state.xIsNext ? 'X' : '0')
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board clickAction = {(i) => this.handleClick(i)} squares = {squares}/>
                </div>
                <div className="game-info">
                    {status}
                </div>
            </div>   
        )
    }

    
}

function calculateWinner(squares){
    const possibilities = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < possibilities.length; i++){
        const [a,b,c] = possibilities[i];
        if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
            return squares[a]
        }
    }
    return null
}