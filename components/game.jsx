import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from './board.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(10,8);
    this.state = {board: board};
    this.updateGame = this.updateGame.bind(this);
    this.restart = this.restart.bind(this);
  }

  restart() {
    const board = new Minesweeper.Board(10,8);
    this.setState({board: board});
  }

  render() {
    let alert;
    if (this.state.board.won() || this.state.board.lost()) {
      alert =
        <div>
          <p>Game over</p>
          <button onClick={this.restart}>Play Again</button>
        </div>;
    }
    return(
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        {alert}
      </div>
    );
  }

  updateGame(tile, flag) {
    flag ? tile.toggleFlag() : tile.explore();
    this.setState({board: this.state.board});
  }
}

export default Game;
