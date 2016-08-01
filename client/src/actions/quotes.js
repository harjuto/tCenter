export const FETCH_QUOTE = "FETCH_QUOTE";
export const RECEIVE_QUOTE = "RECEIVE_QUOTE";

export function fetchQuote() {
  return dispatch => {
    var request = new Request("https://andruxnet-random-famous-quotes.p.mashape.com/", {
      headers: new Headers({
        "X-Mashape-Key": "J6IEiK2ifLmshBdIm4wsc32OGbLcp1F43d3jsn7foeNA4PN4Ak",
        "Accept": "application/json"
      })
    });

    return fetch(request)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveQuote(json))
      );
    //Error handling here.
  }

}

export function receiveQuote(quote) {
  return {
    type: RECEIVE_QUOTE,
    quote
  }
}