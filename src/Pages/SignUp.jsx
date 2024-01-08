import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firebase";
import Toast from "../component/UI/Toast";

const auth = getAuth(app);

function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const createAccount = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const user = data.user;
        user.displayName = name;
        user.phoneNumber = phone;
        setSignUpSuccess(true);
        t();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let ti = 0;
  function t() {
    const timer = setInterval(() => {
      setSignUpSuccess(false);
      ti++;
    }, 3000);
  }

  if (ti == 1) {
    clearInterval(timer);
  }

  return (
    <>
      <div className="sign-in">
        <h1 className="sign-in__heading">create new account</h1>
        <form action="">
          <div>
            <label htmlFor="name">name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="full name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
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
            <button type="submit" onClick={createAccount}>
              create account
            </button>
          </div>
        </form>
      </div>{" "}
      {signUpSuccess ? (
        <Toast text="create account successful" active="toast active" />
      ) : (
        <Toast text="create account successful" active="toast" />
      )}
    </>
  );
}

export default SignUp;
