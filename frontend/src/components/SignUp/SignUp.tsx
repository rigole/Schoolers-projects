import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { register, signInAction } from "../../actions/userActions";
import OrientationImage from "../../images/orientation.jpg";



function SignUp () {
  const location = useLocation()
  const navigate =  useNavigate()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'
  const userRegisters = useSelector((state: any) => state.userRegister)
  const {error, loading, userRegistered} = userRegisters



  const submitHandler = (e:any) => {
    e.preventDefault()
    console.log(userRegistered)
    dispatch<any>(register(username, email, password))
  }

  
  useEffect(() => {
    if(userRegistered){
      navigate('/profile')
    }
  },[navigate, userRegistered, redirect])


    return (
        <section className="signUpSection pt-20">
          <h1 className="text-3xl text-center pt-10 font-bold">SIGN UP FORM</h1>
          <div className="signUpElements">
            <div className="items-start">
              <img  src={OrientationImage} alt="" className="w-[350px] h-[350px] rounded-full items-center text-center py-4"/>
            </div>
            <div>
              <form className="signUpForm" onSubmit={submitHandler}>
               <label htmlFor=""></label>
                <input 
                  type="text" 
                  placeholder="Enter your Name" 
                  name="username"
                  value={username}
                  className="w-[450px] h-[50px] border-solid border-2 rounded-full py-3 px-3"
                  onChange={(e) => setUserName(e.target.value)} 
                  required 
                />
                <label htmlFor=""></label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[450px] h-[50px] border-solid border-2 rounded-full py-3 px-3" 
                  required
                />
                <label htmlFor=""></label>
                <input 
                  type="password" 
                  placeholder="Enter your Password"  
                  className="w-[450px] h-[50px]  border-solid border-2 rounded-full mb-2 py-3 px-3" 
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <Button marginTop={7} text="Sign Up" paddingX={14} paddingY={2} />
                <p className="text-center py-3">OR </p>
                <Link to="#"  className="text-center">
                  <i className="fab fa-google px-1"></i>Sign in with Google
                </Link>
              </form>
            </div>
          </div>
        </section>
    )
}

export default SignUp