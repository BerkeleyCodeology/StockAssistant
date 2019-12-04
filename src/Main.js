import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Game from './Game.js';
import TablePage from './TablePage.js';
import News from './News.js';
import Watchlist from './Watchlist.js';

export default function Main() {
  return(
    <Switch>
      <Route exact path='/StockAssistant/' component={Game}></Route>
      <Route path='/StockAssistant/Movers' component={TablePage}></Route>
      <Route path='/StockAssistant/News' component={News}></Route>
      <Route path='/StockAssistant/Watchlist' component={Watchlist}></Route>
    </Switch>
  )
}
