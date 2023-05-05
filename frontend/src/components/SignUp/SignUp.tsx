import { Link } from "react-router-dom"
import Button from "../Button/Button"


function SignUp () {

    return (
        <div>
             <form id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email"/>
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                      </div>
                      <input type="password" name="password"/>
                    </div>
                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center text-black">
                      <label htmlFor="checkbox">
                        Don't yet have an account? <Link to="/signup">   Sign Up</Link>
                      </label>
                    </div>
                    <div className="field padding-bottom--24 text-white w-[345px] text-center">
                     <Button text="Sign In " paddingX={14} paddingY={2} marginTop={4} />
                    </div>
                    <div className="field">
                      <a className="ssolink" href="#"></a>
                      <p>
                        <a href="#">
                            <i className="fab fa-google "></i>Sign in with Google
                        </a>
                      </p>
                    </div>
                  </form>
        </div>
    )
}

export default SignUp