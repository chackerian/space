import React, { Component } from 'react';

class Dropzone extends Component {

  allowDrop = (event) => {
    event.preventDefault();
  }

  dropped = (event) => {
    event.preventDefault();
    var cool = Array.prototype.slice.call(event.dataTransfer.files);
    console.log(cool)
    let dataTransferItemsList = []
    if (event.dataTransfer) {
      const dt = event.dataTransfer
      if (dt.files && dt.files.length) {
        dataTransferItemsList = dt.files
      } else if (dt.items && dt.items.length) {
        dataTransferItemsList = dt.items
      }
    } else if (event.target && event.target.files) {
      dataTransferItemsList = event.target.files
    }
    console.log(dataTransferItemsList)
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
      </div>
    )
  }

}

export default Dropzone
