import React, { Component } from 'react';

class Dropzone extends Component {

  allowDrop = (event) => {
    console.log("drag")
    event.preventDefault();
  }

  dropped = (event) => {
    event.preventDefault();
    var cool = Array.prototype.slice.call(event.dataTransfer.files);
    console.log(cool, "bool")
    let dataTransferItemsList = []
    if (event.dataTransfer) {
      console.log("dataTransfer 1")
      const dt = event.dataTransfer
      if (dt.files && dt.files.length) {
        dataTransferItemsList = dt.files
      } else if (dt.items && dt.items.length) {
        dataTransferItemsList = dt.items
      }
    } else if (event.target && event.target.files) {
      console.log("dataTransfer 2")
      dataTransferItemsList = event.target.files
    }
    console.log("end", dataTransferItemsList)
  }

  render() {
    return (
      <div
        className='dropzone'
        onClick={(event) => this.dropped(event)}
        onDragOver={(event) => this.allowDrop(event)}
        onEnter={(event) => this.dropped(event)}
        onDrop={(event) => this.dropped(event)}
      >
      <input className='fileDropper' type="file" /><p>Drop images here or click to select</p>
      </div>
    )
  }

}

export default Dropzone
