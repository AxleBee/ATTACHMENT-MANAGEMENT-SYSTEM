import React from "react";
import { useEffect, useState } from "react";

function SupervisorLogin() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div class="container">
      <div class=" wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>Dashboard</h3>
          </div>

          <ul class="list-unstyled components">
            <img
              id="profile-pic"
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              class="rounded-circle m-3"
            />
            <li>
              <a href="#">
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;
                Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;
                Logbooks
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content" class="m-2">
          <nav class="navbar  navbar-light bg-light">
            <div class="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn badge-success"
                title="Collapse"
              >
                <span>
                  {" "}
                  <i class="fas fa-align-justify"></i>
                </span>
              </button>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    &nbsp;&nbsp; Logout
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <h2>Submissions</h2>

          {/* data table */}
          <table class="table align-middle mb-0 bg-white w-auto ">
            <thead class="bg-light">
              <tr>
                <th>Student Name</th>
                <th>Organistion</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      class="rounded-circle"
                    />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">John Doe</p>
                      <p class="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">Software engineer</p>
                  <p class="text-muted mb-0">IT department</p>
                </td>
                <td>
                  <a href="#" class="badge badge-success rounded-pill d-inline">
                    view
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                      class="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">Alex Ray</p>
                      <p class="text-muted mb-0">alex.ray@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">Consultant</p>
                  <p class="text-muted mb-0">Finance</p>
                </td>
                <td>
                  <a href="#" class="badge badge-success rounded-pill d-inline">
                    view
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                      class="rounded-circle"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <p class="fw-bold mb-1">Kate Hunington</p>
                      <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">Designer</p>
                  <p class="text-muted mb-0">UI/UX</p>
                </td>
                <td>
                  <a href="#" class="badge badge-success rounded-pill d-inline">
                    view
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {backToTopButton && (
        <button onClick={scrollup} id="back-to-top" className="btn">
          {" "}
          Back Top &nbsp;
          <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
}

export default SupervisorLogin;
