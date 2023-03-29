import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h1>{err.status}</h1>
      <h2>{"PAGE " + err?.statusText?.toUpperCase()}</h2>
      <button className="btn-home">
        <Link to="/">HOMEPAGE</Link>
      </button>
    </div>
  );
};

export default Error;
