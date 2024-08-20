import "./Formarea.css";

const Formarea = () => {
  return (
    <>
      <div className="formarea">
        <h1>Sign In</h1>
        <form>
          <div className="formdesing">
            <label htmlFor="">Email or mobile number</label> <br />
            <input type="text" placeholder="rakib25059159@gmail.com" />
          </div>
          <div className="formdesing">
            <label htmlFor="">Password</label> <br />
            <input type="password" placeholder="******" />
          </div>
          <button type="submit"> Sign In </button>
        </form>
        <p>OR</p>
        <button className="btn">Use a Sign-In Code</button>
        <p className="forget">Forgot password?</p>
        <input type="checkbox"  />
        <span>Remember me   </span>
        <p className="sLast">
        New to Netflix?<span>Sign up now.</span>
        </p>
        <p className="Last">
        This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot<span>Learn more.</span>
        </p>
      </div>
    </>
  );
};

export default Formarea;
