import React, { Component } from 'react';

export class Dropzone extends Component {

  dropped(event) {
    console.log(event.dataTransfer)
    Array.prototype.slice.call(event.dataTransfer.files)
  }

  render() {
    return (
      <div
        className='dropzone'
        onClick={this.dropped}
        onDrop={this.dropped}
      >
        <input />
      </div>
    )
  }

}

export default Dropzone
