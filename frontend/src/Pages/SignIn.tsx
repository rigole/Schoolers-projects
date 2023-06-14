import React, {useState, useEffect} from "react"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../actions/userActions";
import Button from "../components/Button/Button";



function SignIn(){

  let location = useLocation()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userLogin = useSelector((state:any) => state.userSignIn)

  const {error, loading, signedUser} = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(signedUser){
      navigate("/profile")
    }
  },[navigate,signedUser, redirect])

  const submitHandler = (e:any) => {
    e.preventDefault()
    dispatch<any>(signIn(email, password))
    console.log(email)
    console.log(password)
  }




    return(
        
        <div className="login-root">
        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '90vh', flexGrow: '1'}}>
         
          
            <div className="formbg-outer">
              <div className="formbg">
                <div className="text-center text-red">Schoolers logo</div>
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">Sign in to your account</span>
                  <form onSubmit={submitHandler} id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="text" 
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                      </div>
                      <input 
                        type="password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center text-black">
                      <label htmlFor="checkbox">
                        Don't yet have an account? <Link to="/signup">   Sign Up</Link>
                      </label>
                    </div>
                    <div className="field padding-bottom--24 text-white w-[345px] text-center">
                     <Button text="Sign In" paddingX={14} paddingY={2} marginTop={4} />
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
              </div>
            </div>
          </div>
      </div>
    )
}

export default SignIn
    
