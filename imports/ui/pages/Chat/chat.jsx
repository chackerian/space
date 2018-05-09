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
  		console.log(event)
		if (event.key == "Enter") {
			this.state.messages.push(event.target.value)
		}
  	}

  	messages() {
	    return(
	      this.state.messages.map((item, index) => {
	        return (
	          <div className="bubble sent"><div className='sentMessage'>{item}</div></div>
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
					<div className='messageBox'>
						<div className='messages'>
							<div className='bubble sent'><div className='sentMessage'>Hey, how are you doing?</div></div>
							<div className='bubble'><div className='receivedMessage'>Good thanks</div></div>
							<div className='bubble sent'><div className='sentMessage'>Hey, how are you doing?</div></div>
							<div className='bubble'><div className='receivedMessage'>Good thanks</div></div>
							<div className='bubble sent'><div className='sentMessage'>Hey, how are you doing?</div></div>
							<div className='bubble'><div className='receivedMessage'>Good thanks</div></div>
							{ this.messages() }
						</div>
						<div>
							<input className="chat" placeholder="Send a message" maxLength="30" value={this.state.message} onChange={this.changeMessage(event)} onKeyPress={(event) => this.sendMessage(event)} /> 
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Chat