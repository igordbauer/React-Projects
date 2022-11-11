import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Igor', text: 'Im little bit tired!' }
]

const QuoteDetail = () => {
  const match = useRouteMatch()
  console.log(match)
  const params = useParams()

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>no quote found!</p>
  }

  return <>
    <HighlightedQuote text={quote.text} author={quote.author} />
    <Route path={`${match.path}`} exact>
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>
          Load comments
        </Link>
      </div>
    </Route>
    <Route path={`${match.path}/comments`}>
      <Comments />
    </Route>
  </>
}
export default QuoteDetail;