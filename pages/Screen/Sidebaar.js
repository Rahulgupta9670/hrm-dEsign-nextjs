import React, { useState, useEffect } from "react";
// import { Album } from "./Album";
// import Right_content from "./Dashboard";
// import { Store } from "./Store";
// import Footer from "../footer";
import MainContainer from "../Component/Container";
import { useDispatch, useSelector } from "react-redux";
// import logos from "../../"

const Sidebaar = () => {
  // const [open, setOpen] = useState(false);
  //  let  functions={[open, setOpen]}
  const dispatch = useDispatch();
  const open = useSelector((state) => state.projectR.sideClick);

  useEffect(() => {
    console.log("openSidebar---", open);
  }, [open]);

  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
  });

  return (
    <MainContainer>
      <div id="wrapper">
        <div className="navbar-custom">
          <div className="container-fluid">
            <ul className="list-unstyled topnav-menu float-end mb-0 ">
              <li className="dropdown d-inline-block d-lg-none">
                <a
                  className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="fe-search noti-icon" />
                </a>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                  <form className="p-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Recipient's username"
                    />
                  </form>
                </div>
              </li>
            </ul>

            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
              <li>
                <button
                  className="button-menu-mobile waves-effect waves-light"
                  onClick={() => {
                    dispatch({
                      type: "SIDE_CLICK",
                      payload: !open,
                    });
                  }}
                >
                  <span className="material-icons">menu</span>
                </button>
              </li>
              <li className=" d-none d-xl-block">
                <span className="nav-link waves-effect waves-light fs_15">
                  Dashboard
                  <i className="mdi mdi-chevron-down" />
                </span>
              </li>
              <li>
                <a
                  className="navbar-toggle nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#topnav-menu-content"
                >
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </li>

              <li className="dropdown notification-list topbar-dropdown float-end">
                <a
                  className="nav-link dropdown-toggl nav-user me-0 waves-effect waves-light d-flex"
                  // data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXaKH9Q7gVGHSc2_IK3mOhpEaiULsMGxwRUe2nL4b&s"
                    alt="user-image"
                    className="rounded-circle mt-2"
                  />
                  <span className="pro-user-name fs_15  ms-1">
                    Rahul Gupta
                    {/* <span className="material-icons">expand_more</span> */}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div class="sidebar close"> */}
        <div className={open ? "sidebar close" : "sidebar"}>
          <div class="logo-details">
            <i class="bx bxl-bitcoin"></i>
            <span class="logo_name">Menu</span>
          </div>
          <ul class="nav-links">
            <li>
              <a href="#">
                <i class="bx bx-home"></i>
                <span class="link_name">Home</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="icon-link">
                <a href="#">
                  <i class="bx bx-bulb"></i>
                  <span class="link_name">Solutions</span>
                </a>
                <i class="bx bxs-chevron-down arrow"></i>
              </div>
              <ul class="sub-menu">
                <li>
                  <a class="link_name" href="#">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#">Payments API</a>
                </li>
                <li>
                  <a href="#">Accounts APi</a>
                </li>
                <li>
                  <a href="#">Finance API</a>
                </li>
              </ul>
            </li>
            <li>
              <div class="icon-link">
                <a href="#">
                  <i class="bx bx-news"></i>
                  <span class="link_name">Posts</span>
                </a>
                <i class="bx bxs-chevron-down arrow"></i>
              </div>
              <ul class="sub-menu">
                <li>
                  <a class="link_name" href="#">
                    Posts
                  </a>
                </li>
                <li>
                  <a href="#">Recent</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Most Visited</a>
                </li>
              </ul>
            </li>
            <li>
              <div class="icon-link">
                <a href="#">
                  <i class="bx bx-file-find"></i>
                  <span class="link_name">Insights</span>
                </a>
                <i class="bx bxs-chevron-down arrow"></i>
              </div>
              <ul class="sub-menu">
                <li>
                  <a class="link_name" href="#">
                    Insights
                  </a>
                </li>
                <li>
                  <a href="#">Money Movement</a>
                </li>
                <li>
                  <a href="#">Enterprise Spotlight</a>
                </li>
                <li>
                  <a href="#">Financial Burnout</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="mx-3 my-2 ">
                {/* <i class='bx bxs-credit-card' ></i> */}
                <span class="link_name text-muted"> Recruitment</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="bx bx-bar-chart"></i>
                <span class="link_name">Chart</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Chart
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-compass"></i>
                <span class="link_name">Explore</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Explore
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-cog"></i>
                <span class="link_name">Setting</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Setting
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="mx-3 my-2 ">
                {/* <i class='bx bxs-credit-card' ></i> */}
                <span class="link_name text-muted"> Oragaranation</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-credit-card"></i>
                <span class="link_name">Pricing</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-bar-chart"></i>
                <span class="link_name">Chart</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Chart
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-compass"></i>
                <span class="link_name">Explore</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Explore
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="profile-details">
                <div class="profile-content">
                  <img
                    src="https://github.com/Sacsam005/dropdown-menu/blob/master/image/profile.png?raw=true"
                    alt="profileImg"
                  />
                </div>
                <div class="name-job ms-3">
                  <div class="profile_name">Rahul Gupta</div>
                  <div class="job">React Developer</div>
                </div>
                {/* <i class='bx bx-log-out w-25'></i> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MainContainer>
  );
};

export default Sidebaar;
