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
            <Link class="active item" to="/StockAssistant/">
              Game
            </Link>
            <Link class="item" to="/StockAssistant/Movers">
              Movers
            </Link>
            <Link class="item" to="/StockAssistant/Watchlist">
              Watchlist
            </Link>
             <Link class="item" to="/StockAssistant/News">
              News
            </Link>
        </div>

      </div>
    );
  }
}
