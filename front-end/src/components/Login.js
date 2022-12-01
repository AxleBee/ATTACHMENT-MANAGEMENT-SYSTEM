import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const user = "dan";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      navigate("/supervisor-dashboard", { replace: true });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4" align="center"></div>
        <div className="col-md-4">
          <button
            type="button"
            className="btn btn-sm btn-success"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
export default Login;
