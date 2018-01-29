reportListing = (props) => {
    return(
      <form className="modReport modal multi-step" id="reportListingModal">
        <div className="modReportDialog modal-dialog">
          <div className="modReportContent modal-content">
            <div className="modReportDiv modReportDivOne modal-body step step-1">
              <div className="modReportPageOne">
                <h2>Are You Sure You Want To Report This Listing?</h2>
                <ul className="modFeedbackInitialPageOneItem modReportWarning">
                  <li className="modFeedbackInitialPageOneItemLeft">
                    <ul>
                      <li><img src="{img1}" /></li>
                    </ul>
                  </li>
                  <li className="modFeedbackInitialPageOneItemRight">
                    <ul>
                    {#each listing}
                      <li><b>{listing_title}</b></li>
                      <li>Sold By <a href="#">{username}</a></li>
                      {/each}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="modMultiBtn modMultiBtnReportOne">
                <button type="button" className="btn btn-primary step step-1" data-step="1" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary step step-1 modalNext" data-step="1" onclick="reportListingJump2()">Yes</button>
              </div>
            </div>
            <div className="modReportDiv modReportDivTwo modal-body step step-2">
              <div className="modReportPageTwo">
                <h2>Select All That Apply</h2>
                <ul>
                 <li><input type="checkbox" classNameName="prohibitChoice" />Product is Prohibited </li>
                 <li><input type="checkbox" className="offenseChoice" />Contains Offensive Content</li>
                 <li><input type="checkbox" className="irrelevantChoice" />Contains Irrelevant Content</li>
                 <li><input type="checkbox" className="falseChoice" />Contains False Content</li>
                 <li><input type="checkbox" className="falseChoice" />Contains Nudity</li>
                 <li><input type="checkbox" className="falseChoice" />Doesn't Belong On SpaceTrades</li>
                 <li><input type="checkbox" className="complianceChoice" />Or Doesn't Comply With a Community Standard</li>
               </ul>
             </div>
             <div className="modMultiBtn modMultiBtnReportTwo">
              <button type="button" className="btn btn-primary step step-2 modalBack" data-step="2" onclick="reportListingJump1()">Back</button>
              <button type="button" className="btn btn-primary step step-2 modalNext" data-step="2" onclick="reportListingJump3()">Next</button>
            </div>
          </div>
          <div className="modReportDiv modReportDivThree modal-body step step-3">
            <div className="modReportPageThree">
              <h2>Briefly describe why you are reporting</h2>
              <textarea className="message" placeholder="Briefly provide explanation"></textarea>
            </div>
            <div className="modMultiBtn modMultiBtnReportThree">
              <button type="button" className="btn btn-primary step step-3 modalBack" data-step="3" onclick="reportListingJump2()">Back</button>
              <button type="button" className="btn btn-primary step step-3 modalSubmitBtn" data-step="3">
               <input type="button" data-dismiss="modal" value="Send" />
             </button>
           </div>
         </div>
       </div>
     </div>
    </form>
    )
}

reportUser = (props) => {
  return(
      <form className="modReport modal multi-step" id="reportUserModal">
          <div className="modReportDialog modal-dialog">
              <div className="modReportContent modal-content">
                  <div className="modReportDiv modReportDivOne modal-body step step-1">
                      <div className="modReportPageOne">
                          <h2>Are You Sure You Want To Report This Listing?</h2>
                          <ul className="modFeedbackInitialPageOneItem modReportWarning">
                              <li className="modFeedbackInitialPageOneItemLeft">
                                  <ul>
                                      <li><img src="http://graph.facebook.com/663275057124879/picture/?type=large" /></li>
                                  </ul>
                              </li>
                              <li className="modFeedbackInitialPageOneItemRight">
                                  <ul>
                                      <li><b>Yusuf Bagha</b></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                      <div className="modMultiBtn modMultiBtnReportOne">
                          <button type="button" className="btn btn-primary step step-1 modalExit" data-step="1" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary step step-1 modalNext" data-step="1" onclick="reportUserJump2()">Next</button>
                      </div>
                  </div>
                  <div className="modReportDiv modReportDivTwo modal-body step step-2">
                      <div className="modReportPageTwo">
                          <h2>Select All That Apply</h2>
                          <ul>
                          	<li><input type="checkbox" value="" />They're Using a Fake Name</li>
                          	<li><input type="checkbox" value="" />Person is a Scammer/ Fraud</li>
                          	<li><input type="checkbox" value="" />Underage User </li>
                          	<li><input type="checkbox" value="" />They have Harrassed Me</li>
                              <li><input type="checkbox" value="" />They have Flaked On Me</li>
                          	<li><input type="checkbox" value="" />They're Racist/Offensive</li>
                          	<li><input type="checkbox" value="" />They're Posting Spam</li>
                          	<li><input type="checkbox" value="" />This is a Fake User</li>
                          </ul>
                      </div>
                      <div className="modMultiBtn modMultiBtnReportTwo">
                          <button type="button" className="btn btn-primary step step-2 modalBack" data-step="2" onclick="reportUserJump1()">Back</button>
                          <button type="button" className="btn btn-primary step step-2 modalNext" data-step="2" onclick="reportUserJump3()">Next</button>
                      </div>
                  </div>
                  <div className="modReportDiv modReportDivThree modal-body step step-3">
                      <div className="modReportPageThree">
                            <h2>Please Tell Us More</h2>
                            <textarea placeholder="Explain the situation furthur..."></textarea>
                      </div>
                      <div className="modMultiBtn modMultiBtnReportThree">
                          <button type="button" className="btn btn-primary step step-3 modalBack" data-step="3" onclick="reportUserJump2()">Back</button>
                          <button type="button" className="btn btn-primary step step-3 modalSubmitBtn" data-step="3">
                          	<input type="submit" value="Send" />
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </form>
      )
}
