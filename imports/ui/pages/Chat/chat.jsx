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

	componentDidMount() {
		setInterval(function(){
			console.log(window.innerHeight-220)
			var newheight = window.innerHeight-220
			$('.messages').css('height', newheight)
		}, 100)
	}

  	sendMessage(event) {
  		console.log(event.key)
		if (event.key == "Enter") {
			this.state.messages.push(event.target.value)
			this.setState({message: event.target.value})
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
							<div data-text="Enter your message" className="chat" contenteditable="true" onKeyPress={(event) => this.sendMessage(event)}></div> 
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Chat