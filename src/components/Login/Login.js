/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Hidepass from "./Hidepass.png";
import Showpass from "./Showpass.png";
import "./Login.css";

const clientId =
  "131501766158-j4k1h6q02t1acs5qic094vl34jcsbj0n.apps.googleusercontent.com";

function Login(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [Error, setError] = useState("Entrez vos identifiants");
  const [userConnected, setUserConnected] = useState({});
  const [googleAuth, setGoogleAuth] = useState(false);

  const initialRender = useRef(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSuccess = (response) => {
    var userGoogle = jwt_decode(response.credential);
    setEmail(userGoogle.email);
    setPassword(userGoogle.sub);
    setUsername(userGoogle.name);
    setGoogleAuth(!googleAuth);
    setError("Connected");
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      console.log(email, password);
    }
  }, [googleAuth]);

  const handleGoogleFailure = (response) => {
    console.log(response);
    // Handle errors or failed logins here
  };

  const handleSubmit = (event) => {
    if (password.length < 6 || !email.includes("@") || email.length < 6) {
      setError("Invalid format of Password");
    }
    console.log(email, password);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="Content font-thin h-screen w-full bg-no-repeat bg-cover flex justify-center items-center Login">
        <div className=" bg-opacity-90 w-full h-616 flex justify-center items-center">
          <form className=" text-IGLblanc rounded-lg shadow-md font-montserrat flex flex-col items-center justify-center gap-6 w-1/2 border-yellowIWD border-2 p-10 bg-[white]">
            <h2 className="text-3xl  font-montserrat font-bold  mb-4 text-center">
              Connexion
            </h2>
            {Error.length > 13 ? (
              <p className="text-[red] text-sm">{Error}</p>
            ) : (
              <p className="text-greenIWD text-sm">{Error}</p>
            )}
            <label className="block w-1/2 pl-3">
              Email :
              <input
                className="rounded-md h-10 w-full pl-3 mt-2 border-2"
                type="email"
                placeholder="Votre adresse mail"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label className="block mb-5 w-1/2 pl-3">
              Mot de passe:
              <div className="relative z-0">
                <input
                  className="text-black rounded-md h-10 w-full px-3 mt-3 border-2"
                  placeholder="Votre mot de passe"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  className="h-6 w-6 absolute inset-y-5 object-right  z-10  right-2  flex items-center  "
                  type="button"
                  onClick={toggleShowPassword}
                >
                  <img
                    className="h-full w-full"
                    src={showPassword ? Hidepass : Showpass}
                    alt=""
                  />
                </button>
              </div>
            </label>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2ACF8A",
                width: 1 / 4,
                color: "white",
                fontFamily: "SofiaBold",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#2ACF8A",
                },
              }}
              onClick={handleSubmit}
            >
              Se connecter
            </Button>
            <div className="flex flex-row">
              <hr className="w-16 mr-2 bg-IGLblanc mt-3" />
              <span className="text-IGLblanc ">Ou connectez-vous avec</span>
              <hr className="w-16 ml-2 bg-IGLblanc mt-3" />
            </div>

            <div className="w-full h-10 flex justify-center items-center">
              <GoogleLogin
                clientId={clientId}
                buttonText="Connexion"
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              ></GoogleLogin>
            </div>

            <div className="text-center">
              Vous n’avez pas de compte?{" "}
              <span className="text-IGLorange">
                <Link to="/signup">
                  <button className="border-b-2 pb-1 border-greenIWD">
                    S’inscrire
                  </button>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
