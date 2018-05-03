                <li className="profileSettingsLi">
                  <ul className="profileSettingsPhoto">
                    <li><h4>Photo</h4></li>
                    <li className="profileSettingsImage"><img className="profilePic" src={image} /><input type="file" classNameName="profileSettingsSelectImg" onChange={this.changeImage} /><a href="#" className='buttonred' onClick={this.props.image}>Change Image</a></li>
                  </ul>
                </li>