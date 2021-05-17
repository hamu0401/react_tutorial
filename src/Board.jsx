import React from "react"
import Square from "./Square"

export default function(props) {
  const renderSquare = i => {
    return <Square />
  }
  const status = "次のプレイヤー: X"
  return (
    <div>
      <div>{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
