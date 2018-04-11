import React, { Component } from 'react';

class Dropzone extends Component {

  dropped = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer, "ASD");
    Array.prototype.slice.call(event.dataTransfer.files);
  }

  render() {
    return (
      <div
        className='dropzone'
        onClick={this.dropped}
        onDrop={this.dropped}
      >
      </div>
    )
  }

}

export default Dropzone
