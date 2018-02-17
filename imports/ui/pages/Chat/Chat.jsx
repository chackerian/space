import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Chat extends Component {

	constructor(props) {
		super(props)
	}

	sendMessage = () => {
		var options = {
			message: $(".chatText").val(),
			sender: Meteor.userId(),
			receiver: buyer,
			conversation: id_sell,
			timestamp : new Date()
		};
	}

	render () {
		return (
			<div className="chatDiv">
				<ul className="chatLeft">
					<h3 className="chatConvoTab">Inbox</h3>
					<a href="/chat/{conversations}">
					<li className="chatPeople">
						<ul>
							<li className="chatPerson">
								<ul>
										<li><a><img src={picturesm} /></a></li>
										<li><a className="profile-link" href="/profile/{otherId}">{name}</a></li>
								</ul>
							</li>
						</ul>
					</li>
					</a>
				</ul>

				<ul className="chatRight">
					<li className="chatTopSection">
						<ul>
							<li><h3><a href="">{conversation}</a></h3></li>
							<li>
								<div className="circle" style="background-color: {online.color}"></div>
							</li>
						</ul>
					</li>
					<li className="chatMessages">
						<ul className="chatUserSent">
							<li><a href=""><img src="{}" /></a></li>
							<li className="chatMessageTempWrap">
								<ul>
									<li className="chatUserNameTime"><h4>{name}</h4></li>

									<span className="timestamp">{createdAt}</span>
									<li>
										<ul>
											<li className="chatMessageTemp">{message}</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="chatBottomSection">
						<ul className="chatInputText">
							<li><input type="text" className="chatText" /></li>
						</ul>
						<ul className="chatSend">
							<li><input type="submit" className="chatSendButton" value="Send" /></li>
						</ul>
					</li>
				</ul>
			</div>
			)
		}

}
