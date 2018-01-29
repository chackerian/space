import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Chat extends Component {

	constructor(props) {
		super(props)
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

//         if (Meteor.userId() == seller) {
//
//           var options = {
//             message: $(".chatText").val(),
//             sender: Meteor.userId(),
//             receiver: buyer,
//             conversation: id_sell,
//             timestamp : new Date(),
//             createdAt: new Date()
//           };
//
//           // FORMAT time
//           var time = moment(options.createdAt);
//           time = time.format("h:mm, dddd MMM, DD");
//           options.createdAt = time;
//
//           // Scroll Down
//           $(".chatMessages").scrollTop($(".chatMessages")[0].scrollHeight);
//
//           Meteor.call('sendMessage', options);
//
//           // IF message is a divider - new message after other person talking or just new from the start
//           // if ();
//
//           // Clears message input
//           $(".chatText").val('');
//
//         } else {
//           // First Message
//           var options = {
//             message: $(".chatText").val(),
//             sender: Meteor.userId(),
//             receiver: id,
//             conversation: id_sell,
//             timestamp : new Date(),
//             createdAt: new Date()
//           };
//
//           // FORMAT time
//           var time = moment(options.createdAt);
//           time = time.format("h:mm, dddd MMM, DD");
//           options.createdAt = time;
//
//           Meteor.call('sendMessage', options);
//
//           // Scroll Down
//           $(".chatMessages").scrollTop($(".chatMessages")[0].scrollHeight);
//
//           // IF message is a divider - new message after other person talking or just new from the start
//           // if ();
//
//           // RESET
//           $(".chatText").val('');
//         }
//       }
//     }
//   });
//
// }
//
// if (Meteor.isClient) {
//
//   Template.chatRight.helpers({
//     // id is the conversation id
//     messages: function() {
//       return Message.find({
//         conversation: id_sell
//       }, {
//         sort: {
//           timestamp: 1
//         }
//       });
//     },
//     username: function() {
//       return Meteor.users.find({
//         _id: id
//       }).fetch()[0].profile.name;
//     },
//     online: function() {
//       var status = Meteor.users.find({
//         _id: id
//       }).fetch()[0].status.online;
//       if (status == true) {
//         var color = "#24ec3d";
//         var innercolor = "#029402";
//         var text = "Online";
//       } else {
//         var color = "#ff0000";
//         var innercolor = "#5858FD";
//         var text = "Offline";
//       }
//
//       return {
//         color: color,
//         innercolor: innercolor,
//         text: text
//       };
//     }
//   });
