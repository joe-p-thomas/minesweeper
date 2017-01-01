import React from 'react';
import Tile from './tile.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = this.props.board.grid.map((row, rowIdx) => {
      return (
        <div className="row"
             key={rowIdx}>
          {row.map((tile, colIdx) => {
            return(<Tile key={[rowIdx,colIdx]}
                         tile={tile}
                         updateGame={this.props.updateGame}/>);
          })}
        </div>
      );
    });
    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}

export default Board;
