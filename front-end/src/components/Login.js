import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/Style.css'
function Login() {
  var x = document.getElementById("login");
  var y = document.getElementById("signup");
  var z = document.getElementById("btn");

  function signup() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
  }
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const user = "dan";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate("/supervisor-dashboard", { replace: true });
    }
  };
  return (
      <>
        <div className="hero">
          <div class="form-box">
            <div class="button-box">
              <div id="btn"></div>
              <button type="button" class="toggle-btn" onclick="login()">
                Login
              </button>
              <button type="button" class="toggle-btn" onclick="signup()">
                Signup
              </button>
            </div>
            <form id="login" class="input-group">
              <input
                type="text"
                class="input-field"
                placeholder="Enter Username"
                required
              />
              <input
                type="password"
                class="input-field"
                placeholder="Enter password"
                required
              />
              <input type="checkbox" class="chech-box" />
              <span>Remember me.</span>
              <button type="submit" class="submit-btn">
                Login
              </button>
            </form>
            <form id="signup" class="input-group">
              <input
                type="text"
                class="input-field"
                placeholder="Enter User Type"
                required
              />
              <input
                type="text"
                class="input-field"
                placeholder="Enter Username"
                required
              />
              <input
                type="email"
                class="input-field"
                placeholder="Email Id"
                required
              />
              <input
                type="password"
                class="input-field"
                placeholder="Enter Password"
                required
              />
              <input
                type="password"
                class="input-field"
                placeholder="Confirm Password"
                required
              />
              <input type="checkbox" class="chech-box" />
              <span>I agree to the terms & conditions.</span>
              <button type="submit" class="submit-btn">
                Signup
              </button>
            </form>
            <h1>ATTACHMENTS MANAGEMENT SYSTEM</h1>
          </div>
        </div>
      </>
  );
}
export default Login;
