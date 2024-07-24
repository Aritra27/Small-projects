import React, { useState } from 'react'
import "./Game.css"
import Circle from "../assets/circle.png"
import Cross from "../assets/cross.png"
const Game = () => {
    let [lock, setLock] = useState(false);
    let [count, setCount] = useState(0);
    let [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);
    const [turn,setTurn] = useState('Circle')

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const winningCondition = (newboard) => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (newboard[a] && newboard[a] === newboard[b] && newboard[b] === newboard[c]) {
                setLock(true);
                setWinner(newboard[a] === Circle ? 'Circle' : 'Cross');
                return true;
            }
        }
        return false;
    }
    const toggle = (index) => {
        if (lock || board[index]) {
            return;
        }
        const newboard = [...board]
        newboard[index] = count % 2 === 0 ? Circle : Cross
        newboard[index]=== Circle?setTurn('Cross'):setTurn('Circle')
        if (!winningCondition(newboard) && count === 8) {
            setWinner('draw')
        }
        setBoard(newboard)
        setCount(++count);
        console.log("click")
        console.log(lock)
    }
    return (
        <div className='container'>
            <h1>hello Anwesha</h1>
            { winner===null ? <h1>it's {turn} Turn</h1>:'' }
            {winner? ( winner==="draw"?<h1>oops its draw</h1>: <h1>the winner is {winner}</h1>):''}
            <div className="row1 row">
                <div className="boxes" onClick={() => { toggle(0) }}>
                    {board[0] && <img src={board[0]} alt="" />}
                </div>
                <div className="boxes" onClick={() => { toggle(1) }}>
                    {board[1] && <img src={board[1]} alt="" />}
                </div>
                <div className="boxes" onClick={() => { toggle(2) }}>
                    {board[2] && <img src={board[2]} alt="" />}
                </div>
            </div>
            <div className="row2 row">
                <div className="boxes" onClick={() => { toggle(3) }}>
                    {board[3] && <img src={board[3]} alt="" />}
                </div>
                <div className="boxes" onClick={() => { toggle(4) }}>
                    {board[4] && <img src={board[4]} alt="" />}
                </div>
                <div className="boxes" onClick={() => { toggle(5) }}>
                    {board[5] && <img src={board[5]} alt="" />}
                </div>
            </div>
            <div className="row3 row">
                <div className="boxes" onClick={() => { toggle(6) }}>
                    {board[6] && <img src={board[6]} alt="" />}
                </div>
                <div className="boxes" onClick={() => { toggle(7) }}>
                    {board[7] && <img src={board[7]} alt="" />}
                </div>
                <div className="boxes" onClick={() => { toggle(8) }}>
                    {board[8] && <img src={board[8]} alt="" />}
                </div>
            </div>
        </div>
    )
}
export default Game