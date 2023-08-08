import React, { useState } from "react"

export const LogIn = (props) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

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
              onChange={(e) => setUsername(e.value)}
              value={username}
            />
            <label htmlFor="loginUsername" />
            <input
              id="loginPassword"
              type="password"
              required
              placeholder=" "
              onChange={(e) => setPassword(e.value)}
              value={password}
            />
            <label htmlFor="loginPassword" />
          </fieldset>
          <button>
            LOG IN
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