import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import MainContainer from "./Component/Container";

const Home = () => {
  const [state, setState] = useState(false);

  return (
    <MainContainer>
      <div className="row back">
        <div className="col-12 p-4">
          <div
            className={`container ${state ? "right-panel-active" : ""}`}
            id="container"
          >
            <div className="form-container  sign-up-container">
              <form action="#">
                <div className="header">Sign Up</div>
                <div className="social__media__container">
                  <a
                    href="https://codepen.io/Rittenhouse"
                    target="_blank"
                    className="social codepen"
                  >
                    <i className="fa-brands fa-codepen" />
                  </a>
                  <a href="#" className="social google">
                    <i className="fa-brands fa-google" />
                  </a>
                  <a
                    href="https://www.instagram.com/zaur.suleymnv/"
                    target="_blank"
                    className="social instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
                <span className="under__social">
                  <a href="#" className="link signin-link">
                    or use your email for registration
                  </a>
                </span>
                <div className="button-input-group">
                  <div className="group input-group">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="group input-group">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="group input-group">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      pattern=".{8,}"
                    />
                  </div>
                  <div className="alert-text signup__alert">
                    <span className="help__text">At least 8 character</span>
                  </div>
                  <div className="group button-group">
                    <button className="signup-btn">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="form-container  sign-in-container">
              <form action="#">
                <div className="header">Sign In</div>
                <div className="social__media__container">
                  <a
                    href="https://codepen.io/Rittenhouse"
                    target="_blank"
                    className="social codepen"
                  >
                    <i className="fa-brands fa-codepen" />
                  </a>
                  <a href="#" className="social google">
                    <i className="fa-brands fa-google" />
                  </a>
                  <a
                    href="https://www.instagram.com/zaur.suleymnv/"
                    target="_blank"
                    className="social instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
                <span className="under__social">
                  <a href="#" className="link signup-link">
                    or use your account
                  </a>
                </span>
                <div className="button-input-group">
                  <div className="group input-group">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="group input-group">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      pattern=".{8,}"
                    />
                  </div>
                  <div className="alert-text signup__alert">
                    <span className="help__text">At least 8 character</span>
                  </div>
                  <div className="form-link forgot">
                    <a href="#" className="login-link">
                      Forgot your password?
                    </a>
                  </div>
                  <div className="group button-group">
                    <Link href="./Screen/Dashboard">
                      <button className="signin-btn" >
                        Sign in
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>Please login your personal info</p>
                  <div className="group button-group">
                    <button className="ghost" onClick={() => setState(!state)}>
                      Sign in
                    </button>
                  </div>
                  <footer>
                    <p>
                      Inspired by{" "}
                      <a href="https://codepen.io/Rittenhouse" target="_blank">
                        Zaur Suleymanlı
                      </a>
                    </p>
                  </footer>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>
                    Enter your personal details and start your journey with us
                  </p>
                  <div className="group button-group">
                    <button className="ghost" onClick={() => setState(!state)}>
                      Sign up
                    </button>
                  </div>
                  <footer>
                    <p>
                      Inspired by{" "}
                      <a className="text-white" href="https://codepen.io/Rittenhouse" target="_blank">
                      Cpm @ India
                      </a>
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container">
		<div class="login-container">
			<div class="login-container-img">
				<h1>OCP Group
					<span>Fertilizer Analytics</span>
				</h1>
			</div>
			<div class="login-container-content">
				<form action="" class="login-form">
					<button type="button" class="buttonX">X</button>
					<h1>Login</h1>
					<p class="field">
						<label>Utilisateur/Email</label>
						<input type="text" name="username" placeholder="user"/>
					</p>
					<p class="field">
						<label>Mot de passe</label>
						<input type="password" name="password" placeholder="password"/>
						<a href="">oublier mot de passe?</a>
					</p>
					<button type="submit" class="submitBtn">Se connecter</button>
				</form>
			</div>
		</div>
    </div> */}
    </MainContainer>
  );
};
export default Home;
