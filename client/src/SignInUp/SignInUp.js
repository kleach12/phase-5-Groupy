import "./SignInUp.css";

export default function SignInUp() {
  return (
    <div id="sign_in_up">
      <div id="web_name">
        <h2 id="IRL"> IRL</h2>
        <img
          id="logo"
          src="https://www.clipartmax.com/png/small/1-16702_world-clip-art-transparent-background-earth-clipart.png"
          alt="profile pic"
        />
      </div>
      <div id="sign_in_up_box">
        <div id = "sign_in">
          <input
            className="sign_in_text"
            tupe="textbox"
            placeholder="Username"
          />
          <input
            className="sign_in_text"
            tupe="textbox"
            placeholder="Password"
          />
          <input className="sing_in_button" type="button" value="Sign In" />
        </div>
        <div id="sign_up">
          <input className="sign_up_button" type="button" value="Sign Up" />
        </div>
      </div>
    </div>
  );
}
