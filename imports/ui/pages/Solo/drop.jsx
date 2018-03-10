import React from 'react'

class Dropzone extends React.Component {

  dropped() {
    console.log(event.dataTransfer)
    Array.prototype.slice.call(event.dataTransfer.files)
  }

  render() {
    return (
      <div
        className='dropzone'
        onClick
        onDrop={this.dropped()}
      >
        <input />
      </div>
    )
  }
  
}

export default Dropzone
