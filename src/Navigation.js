import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <div class="ui menu">
            <Link class="active item" to="/">
              Game
            </Link>
            <Link class="item" to="/Movers">
              Movers
            </Link>
            <Link class="item" to="/Watchlist">
              Watchlist
            </Link>
             <Link class="item" to="/News">
              News
            </Link>
        </div>

      </div>
    );
  }
}
