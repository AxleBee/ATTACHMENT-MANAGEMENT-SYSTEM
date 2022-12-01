import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LogBookFeeback() {
  let user = useParams();
  const date = document.getElementById("dater") ? document.getElementById("dater").value: ""
  let myDate = new Date((date.replace(/\//g, "-")));

  console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
 
  // fetching api data
  const [movie, setMovie] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  // const fetchData = () => {};

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${user.id}?api_key=1a612bf729e479b9f236c64a3ddeb94b`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);
  return (
    <div className="container">
      <p className="text-center">User ID: {movie["id"]}</p>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <a
                href="/supervisor-dashboard/"
                // class=" btn btn-success btn-floating"
                className="badge badge-success rounded-pill"
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-10px",
                  padding: "10px",
                }}
                title="close"
              >
                <i class="fas fa-close"></i>
              </a>
              <h6 class="card-title">
                <b>STUDENT NAME:</b>&nbsp;&nbsp;
                {movie["title"] ? (
                  " " + movie["title"]
                ) : (
                  <ThreeDots
                    height="20"
                    width="20"
                    wrapperStyle={{ display: "inline-block" }}
                  />
                )}{" "}
              </h6>
              <h6 class="card-title">
                <b>COURSE OF STUDY:</b> INFORMATION TECHNOLOGY{" "}
              </h6>
              <h6 class="card-title">
                <b>Employer Email:</b> KTGN@GMAIL.COM
              </h6>
              <hr></hr>
              <div
                id="date-picker"
                style={{ display: "flex" }}
                className=" row mb-2"
              >
                <div className="col-md-3"></div>
                <div className="col-md-3">DATE:</div>
                <div className="col-md-6">
                  {" "}
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    id="dater"
                  />
                </div>
              </div>
              <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered align-middle mb-0 bg-white w-auto mb-2 ">
                  <thead class="">
                    <tr>
                      <th>Day</th>
                      <th>Activities</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "#E7FBEC" }}>
                    {" "}
                    <tr>
                      <td>
                        <p class="fw-normal mb-1">
                          <b>Monday</b>
                        </p>
                      </td>
                      <td>
                        <p class="text-muted mb-0">
                          Created a database configuraation file and posted it
                          to the IT ddepartement
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="fw-normal mb-1">
                          <b>Tuesday</b>
                        </p>
                      </td>
                      <td>
                        <p class="text-muted mb-0">
                          Created an API to be used on validating a user.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="fw-normal mb-1">
                          <b>Wednesday</b>
                        </p>
                      </td>
                      <td>
                        <p class="text-muted mb-0">
                          Created an API to be used on validating a user.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="fw-normal mb-1">
                          <b>Thursday</b>
                        </p>
                      </td>
                      <td>
                        <p class="text-muted mb-0">
                          Created an API to be used on validating a user.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <form
                method="post"
                class="form-group"
                id="feedback"
                style={{ display: "none" }}
              >
                <label for="comment" className="mt-2">
                  Feedback:
                </label>
                <textarea class="form-control" rows="5" id="comment"></textarea>

                <button
                  type="submit"
                  className="btn badge-success rounded-pill mt-2"
                  style={{ backgroundColor: "#386A2C", color: "white" }}
                >
                  submit feedback
                </button>
              </form>
              <button
                id="addFeedback"
                className="btn  rounded-pill mt-2 pull-right"
                style={{ backgroundColor: "#386A2C", color: "white" }}
              >
                <i class="fas fa-plus"></i>&nbsp;&nbsp;Feedback
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  );
}

export default LogBookFeeback;
