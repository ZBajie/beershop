import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError() as Error

  if (!isRouteErrorResponse(error)) {
    return null
  }
  return (
    <div className="error-page">
      <h1>Learn how to spell the URL, your drunk bastard</h1>
      <p>
        {error.status === 404
          ? "The world you're looking for doesn't exist."
          : "An unexpected error has occurred."}
      </p>
      <p>{error.data}</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default ErrorPage
