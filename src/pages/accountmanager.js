import React, { useEffect, useState } from "react";

import { useAuth } from "../components/AuthContext";

import { authorizationURL, setRandomStringCookie } from "../functions/redditApi";
import { useNavigate } from "react-router-dom";

export const AccountManager = (props) => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLoginButtonClick = () => {
    setRandomStringCookie()
    window.location.href = authorizationURL;
  };

  useEffect(()=>{
    auth.isAuthenticated==true && navigate("/")
  })

  return (
    <div className="accountManager">
      <form>
        <span>
          <legend>Log in</legend>
          <p>
            By continuing, you agree to our <a>User Agreement</a> and
            <a>Privacy Policy</a>.
          </p>
          <span>
            <button>
              continue with Google
            </button>
            <button>
              continue with Apple
            </button>
          </span>
        </span>
        <div>
          OR
        </div>
        <span>
          <fieldset>
            <input
              id="loginUsername"
              type="text"
              required
              placeholder=" "
              minLength={3}
              maxLength={20}
            />
            <label htmlFor="loginUsername" />
            <input
              id="loginPassword"
              type="password"
              required
              placeholder=" "
            />
            <label htmlFor="loginPassword" />
          </fieldset>
          <button onClick={() => handleLoginButtonClick()}>
            Click to Login
          </button>
        </span>
        <p>Forgot your username and password?</p>
        <span>
          <p>New to Reddit?</p>
          <a>
            SIGN UP
          </a>
        </span>
      </form>
    </div>
  )
}

export const Register = (props) => {
  return (<>
    <div className="accountManager">
      <form>
        <span>
          <legend>Sign up</legend>
          <p>
            By continuing, you are setting up a Reddit
            account and agree to our <a>User Agreement</a> and
            <a>Privacy Policy</a>.
          </p>
          <span>
            <button>
              continue with Google
            </button>
            <button>
              continue with Apple
            </button>
          </span>
        </span>
        <div>
          OR
        </div>
        <span>
          <fieldset>
            <input id={"registerEmail"} type="email" />
            <label htmlFor="registerEmail" />
          </fieldset>
          <button>
            CONTINUE
          </button>
        </span>
        <span>
          <p>Already a readditor?</p>
          <a>
            LOG IN
          </a>
        </span>
      </form>
    </div>
  </>)
}