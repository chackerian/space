<div class="modNotifications modal" id="notificationsModal">
  <div class="modNotificationsDialog modal-dialog" role="document">
    <div class="modNotificationsContent modal-content">
      <div class="modNotificationsBody modal-body">
        <div class="notifMainWrap">
    <h2>Your Notifications</h2>
    <ul class="notifUl">
      {{#each notification}}
      <li class="notifLi">
        <ul>
          <li class="notifImage">
            <img src="http://graph.facebook.com/663275057124879/picture/?type=small" class="notifImg">
          </li>
          <li class="notifInfo">
            <ul>
              <!-- Jacob, and Nike Air Max Retro are links -->
              <li class="notifMessage"><p class="notifMessageP"><a href="#">Jacob</a> sent you an offer of <span class="money">$250</span> for <a href="#">Nike Air Max Retro</a></p></li>
              <li class="notifDate"><p>Yesterday at 3:40pm</p></li>
            </ul>
          </li>
        </ul>
      </li>
      {{/each}}
    </ul>
    <!-- Example Notifications, DELETE AFTER SEEING-->
    <ul class="notifUl">
      <li class="notifLi">
        <ul>
          <li class="notifImage">
            <img src="http://graph.facebook.com/663275057124879/picture/?type=small" class="notifImg">
          </li>
          <li class="notifInfo">
            <ul>
              <!-- Jacob, and Nike Air Max Retro are links -->
              <li class="notifMessage"><p class="notifMessageP"><a href="#">Jacob</a> sent you an offer of <span class="money">$250</span> for <a href="#">Nike Air Max Retro</a></p></li>
              <li class="notifDate"><p>Yesterday at 3:40pm</p></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="notifLi">
        <ul>
          <li class="notifImage">
            <img src="http://graph.facebook.com/663275057124879/picture/?type=small" class="notifImg">
          </li>
          <li class="notifInfo">
            <ul>
              <!-- Jacob, and Nike Air Max Retro are links -->
              <li class="notifMessage"><p class="notifMessageP"><a href="#">Jacob</a> sent you an offer of <span class="money">$250</span> for <a href="#">Nike Air Max Retro</a></p></li>
              <li class="notifDate"><p>Yesterday at 3:40pm</p></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="notifLi">
        <ul>
          <li class="notifImage">
            <img src="http://graph.facebook.com/663275057124879/picture/?type=small" class="notifImg">
          </li>
          <li class="notifInfo">
            <ul>
              <!-- Jacob, and Nike Air Max Retro are links -->
              <li class="notifMessage"><p class="notifMessageP"><a href="#">Jacob</a> sent you an offer of <span class="money">$250</span> for <a href="#">Nike Air Max Retro</a></p></li>
              <li class="notifDate"><p>Yesterday at 3:40pm</p></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="notifLi">
        <ul>
          <li class="notifImage">
            <img src="http://graph.facebook.com/663275057124879/picture/?type=small" class="notifImg">
          </li>
          <li class="notifInfo">
            <ul>
              <!-- Jacob, and Nike Air Max Retro are links -->
              <li class="notifMessage"><p class="notifMessageP"><a href="#">Jacob</a> sent you an offer of <span class="money">$250</span> for <a href="#">Nike Air Max Retro</a></p></li>
              <li class="notifDate"><p>Yesterday at 3:40pm</p></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="notifLi">
        <ul>
          <li class="notifImage">
            <img src="http://graph.facebook.com/663275057124879/picture/?type=small" class="notifImg">
          </li>
          <li class="notifInfo">
            <ul>
              <!-- Jacob, and Nike Air Max Retro are links -->
              <li class="notifMessage"><p class="notifMessageP"><a href="#">Jacob</a> sent you an offer of <span class="money">$250</span> for <a href="#">Nike Air Max Retro</a></p></li>
              <li class="notifDate"><p>Yesterday at 3:40pm</p></li>
            </ul>
          </li>
        </ul>
      </li>
      <!-- Example End -->
    </ul>
  </div>
      </div>
    </div>
  </div>
</div>

<a href="{{link}}"><li>
  {{#if equals type "offer"}}
  <div class="notificationBody">
    <a href="/profile/{{creator_id}}" class="profile-link">{{creator_name}}</a>
    <b>{{action}}</b>
    <br/>
    of
    <span class="money"> ${{offer_price}} </span>
    for
    {{listing_title}}
    <br/>
    {{timestamp}}
  </div>
  {{/if}}
  {{#if equals type "accepted"}}
  <div class="notificationBody">
    <a href="/profile/{{creator_id}}" class="profile-link">{{creator_name}}</a>
    <b>{{action}}</b>
    <br/>
    of
    <span class="money"> ${{offer_price}} </span>
    for
    {{listing_title}}
    <br/>
    {{timestamp}}
  </div>
  {{/if}}
  {{#if equals type "reminder"}}
  <div class="notificationBody">
    <b>{{action}}</b>
    <br/>
    for
    {{listing_title}}
    <br/>
    {{timestamp}}
  </div>
  {{/if}}
  {{#if equals type "feedback"}}
  <div class="notificationBody">
    <b>{{action}}</b>
    <br/>
    for
    {{listing_title}}
    <br/>
    {{timestamp}}
  </div>
  {{/if}}
</li></a>
