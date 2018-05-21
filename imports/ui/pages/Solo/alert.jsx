import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alert extends Component {

  render() {
    if (this.props.alert == "add") {
      return (
        <div className="fall">
          <span>{this.props.message="Listing Created Successfully"}</span>
        </div>
      )
    } else {
      return null
    }
  }

}

const mapStateToProps = state => {
  return {
    alert: state.alert
  };
}

export default connect(mapStateToProps, null)(Alert)
