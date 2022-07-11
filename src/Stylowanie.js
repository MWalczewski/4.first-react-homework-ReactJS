import Flag from "./FlagUS.svg";
import "./Stylowanie.css";

const Page = () => {
  return (
    <>
      <div className="sign-in-container">
        <div className="top-section">
          <img src={Flag} alt="USA flag" className="flag" />
          <span className="sign-in-title">Sign in</span>
          <div>Fill in the fields below to sing into your account</div>
        </div>
        <form className="sign-in-form">
          <div className="email-input">
            <input
              className="sign-in-input"
              type="email"
              placeholder="type your e-mail address"
            ></input>
            <label class="input-label" for="sign-in-input">
              Email
            </label>
          </div>

          <button className="sign-in-button">Sign in</button>
        </form>
        <div className="sign-in-bottom">
          <p className="sign-in-bottom-text">
            Don't have an account, yet?{" "}
            <a className="link" href="">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
