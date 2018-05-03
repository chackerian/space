import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import Dropzone from '../Solo/drop.jsx';
var AWS = require('aws-sdk');

class Chat extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: "",
		  	messages: []
		}
	}

	changeMessage(event) {
	    this.setState({
	      message: event.target.value
	    })
  	}

  	sendMessage(event) {
		if (event.key == "Enter") {
			this.state.messages.push(event.target.value)
		}
  	}

  	messages() {
	    return(
	      this.state.messages.map((item, index) => {
	        return (
	          <span className="bubble">{item}</span>
	        )
	      })
	    )
  	}

	render() {
		return(
			<div className='oneDiv'>
				<div className='allMessages'>
					<div className='users'>
						<ul>
							<li>John George</li>
							<li>John George</li>
							<li>John George</li>
						</ul>
					</div>
					<div className='messages'>
						{ this.messages() }
					</div>
					<div>
						<input type="text" className="chat" placeholder="Send a message" maxLength="30" value={this.state.message} onChange={(event) => this.changeMessage(event)} onKeyPress={(event) => this.sendMessage(event)} />
					</div>
				</div>
			</div>
		)
	}

}

export default Chat