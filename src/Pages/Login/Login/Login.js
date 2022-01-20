import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { isLoading, setIsLoading, setUsers, signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const uri = location.state?.from || "/login";

  const googleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setUsers(result.user);
        history.push(uri);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="login">
      <h2>Please Login</h2>
      <button onClick={googleSignIn} className="btn btn-success">
        Google-SignIn
      </button>
    </div>
  );
};

export default Login;
