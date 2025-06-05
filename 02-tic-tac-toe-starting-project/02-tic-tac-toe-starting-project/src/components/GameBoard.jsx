import { useState } from "react";

 const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
 ];
 
 export default function GameBoard() {
    const [gameBord, setGameBord] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBord((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updateBoard[rowIndex] [colIndex] = 'X';
            return updateBoard
        })
    }

    return (
        <ol id="game-board">
            {gameBord.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                   {row.map((playerSymbol, coIndex) => (
                    <li key={coIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, coIndex)}>{playerSymbol}</button>
                        </li>
                    ))} 
                </ol>
            </li>)}
        </ol>
    );
 }