import Title from "./Components/Title";

const Login = () => {
  return (
  <div className="login" id="login">
    <Title title='Membership' subtitle='Login'/>
      <div className="login">
        <div className="login-card">
          <div className="login-card-img">
            <img className="login-card-image" src="public/img/Login/login.webp" alt=""/>
          </div>
          <div class="login-card-container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
            <br></br>
            <input type="submit" value="Login"/>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default Login;