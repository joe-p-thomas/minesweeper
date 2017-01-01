import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(event) {
    this.props.updateGame(this.props.tile, event.altKey);
  }

  render () {
    let icon = "";
    let klass = "";
    if (this.props.tile.explored) {
      klass = "explored";
      icon = this.props.tile.adjacentBombCount();
      icon = icon === 0 ? " " : icon;
      if (this.props.tile.bombed) {
        klass += " bombed";
        icon = '\u2620';
      }
    } else if (this.props.tile.flagged) {
      klass = "flagged";
      icon = '\u2691';
    }
    return (
      <div className={`tile ${klass}`}
           onClick={this.clickHandle}>
        {icon}
      </div>
    );
  }
}

export default Tile;
