import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/'
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
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-4" align="center"></div>
    //     <div className="col-md-4">
    //       <button
    //         type="button"
    //         className="btn btn-sm btn-success"
    //         onClick={handleSubmit}
    //       >
    //         Login
    //       </button>
    //     </div>
    //     <div className="col-md-4"></div>
    //   </div>
    // </div>
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>LOGIN AND REGISTRATION FORM</title>
        <link rel="stylesheet" href='' />
      </head>
      <body>
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
      </body>
    </html>
  );
}
export default Login;
