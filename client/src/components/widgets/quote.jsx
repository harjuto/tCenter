import React from 'react';
import '../../style/quote.less'

import {fetchQuote} from '../../actions/quotes';

export default class Quote extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchQuote());
    this.interval = setInterval( () => {
      this.props.dispatch(fetchQuote());
    }, 1000 * 60 * 60 * 3)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const quote = this.props.state.quote;
    console.info(quote);
    return (
      <div className="quote-container">
        {this.renderQuoteImage(quote[0])}
      </div>
    )
  }


  renderQuoteImage(quote) {
    if(quote) {
      return <img src={quote.media}/>
    } else {

    }

  }
}