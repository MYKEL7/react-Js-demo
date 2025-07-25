const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
 ];
 
 export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    // const [gameBord, setGameBord] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBord((prevGameBoard) => {
    //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updateBoard[rowIndex] [colIndex] = activePlayerSymbol;
    //         return updateBoard
    //     });

    //     onSelectSquare();

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                   {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))} 
                </ol>
            </li>)}
        </ol>
    );
}