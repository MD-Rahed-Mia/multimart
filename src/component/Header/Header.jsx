import React, { useState } from "react";
import "./../../Style/Header.css";
import { app } from "../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

import LogoIcon from "./../../assets/images/logo.png";
import CartIcon from "./../../assets/images/cartIcon.png";
import LoveIcon from "./../../assets/images/loveIcon.png";
import UserIcon from "./../../assets/images/user.png";

import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navLink = [
  {
    path: "home",
    display: "home",
  },
  {
    path: "shop",
    display: "shop",
  },
  {
    path: "cart",
    display: "cart",
  },
];

const curUser = auth.currentUser;

function Header() {
  const [signIn, setSignIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignIn(true);
    } else {
      console.log("user not sign in.");
    }
  });

  const signOutAccount = () => {
    auth.signOut().then((c) => {
      console.log("log out successful");
      setSignIn(false);
    });
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <img src={LogoIcon} alt="logo" />
            <span>Multimart</span>
          </Link>
        </div>
        <div className="menu">
          <ul>
            {navLink.map((item, index) => {
              return (
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "nav-active" : ""
                  }
                  key={index}
                  to={item.path}
                >
                  {item.display}
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="user-profile">
          <motion.img whileTap={{ scale: 1.2 }} src={LoveIcon} alt="" />
          <Link to={"/cart"}>
            {" "}
            <img src={CartIcon} alt="" />
          </Link>
          {!signIn && <Link to={"/signin"}>Sign in</Link>}
          {!signIn && <Link to={"/signup"}>Sign up</Link>}
          {signIn && (
            <Link to={"/signin"} onClick={signOutAccount}>
              Log out
            </Link>
          )}

          <img src={UserIcon} alt="" className="user-icon" />
        </div>
      </div>
    </>
  );
}

export default Header;
