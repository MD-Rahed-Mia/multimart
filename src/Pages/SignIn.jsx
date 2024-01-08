import React, { useState } from "react";
import "./../Style/Signin.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firebase";
import Toast from "../component/UI/Toast";
import { useHref } from "react-router-dom";

const auth = getAuth(app);

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [sSignIn, setSSignIn] = useState(false);

  const singInAccount = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSSignIn(true);
        t();
        const user = userCredential.user;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let ti = 0;
  function t() {
    const timer = setInterval(() => {
      setSSignIn(false);
      ti++;
    }, 3000);
  }

  if (ti == 1) {
    clearInterval(timer);
  }

  return (
    <>
      <div className="sign-in">
        <h1 className="sign-in__heading">Sign in</h1>
        <form action="">
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email or username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" onClick={singInAccount}>
              sign in
            </button>
          </div>
        </form>
      </div>

      {sSignIn ? (
        <Toast text="sign in successful" active="toast active" />
      ) : (
        <Toast text="sign in successful" active="toast" />
      )}
    </>
  );
}

export default SignIn;
