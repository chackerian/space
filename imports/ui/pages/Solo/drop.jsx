import React, { Component } from 'react';

class Dropzone extends Component {

  allowDrop = (event) => {
    $(".dropzone").css('border', '2px dashed red')
    event.preventDefault();
  }

  dropped = (event) => {
  event.preventDefault();
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
  }

  render() {
    return (
      <div
        className='dropzone'
        onClick={(event) => this.dropped(event)}
        onDragOver={(event) => this.allowDrop(event)}
        onDragEnter={(event) => this.dropped(event)}
        onDrop={(event) => this.dropped(event)}
      >
      <input className='fileDropper' type="file" /><p>Drop images here or click to select</p>
      </div>
    )
  }

}

export default Dropzone
