import React from "react";
import Board from "./board";

export default function Game(){
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
        </div>
        
    )
}