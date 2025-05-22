 const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
 ];
 
 export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                   {row.map((playerSymbol, coIndex) => (
                    <li key={coIndex}>
                        <button>{playerSymbol}</button>
                        </li>
                    ))} 
                </ol>
            </li>)}
        </ol>
    );
 }