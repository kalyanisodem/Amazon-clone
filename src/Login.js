import React , {useState}from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {  history.push("/");})
    .catch(error => alert(error.message));
  }
  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {console.log(auth)})
    .catch(error => alert(error.message));
    if (auth) {
      history.push("/");
    }

  }
  return (
  <div className="login">
    <Link to="/">

        <img className="login__logo"src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png" alt=""/>

    </Link>

    <div className="login__container">
        <h1>Sign In</h1>
      <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
          <button className="login__signinButton" onClick={signIn}>Sign In</button>
        </form>
        <p>All content included in or made available through
         any Amazon Service, such as text, graphics, logos,
         button icons, images, audio clips, digital downloads,
         data compilations, and software is the property of
         Amazon or its content suppliers and protected by United
         States and international copyright laws. </p>
         <button onClick={register}
         className="login__registerButton">Create your amazon Account</button>
      </div>

    </div>
  )
}

export default Login
