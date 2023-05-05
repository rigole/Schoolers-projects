import { Link } from "react-router-dom"
import Button from "../Button/Button"
import OrientationImage from "../../images/orientation.jpg";


function SignUp () {

    return (
        <section className="signUpSection pt-20">
          <h1 className="text-3xl text-center pt-10 font-bold">SIGN UP FORM</h1>
          <div className="signUpElements">
            <div className="items-start">
              <img  src={OrientationImage} alt="" className="w-[350px] h-[350px] rounded-full items-center text-center py-4"/>
            </div>
            <div>
              <form className="signUpForm" action="">
                <label htmlFor="">Name</label>
                <input type="text" className="w-[450px] h-[50px] border-solid border-2 rounded-full py-3" required />
                <label htmlFor="">Email</label>
                <input type="email"  className="w-[450px] h-[50px] border-solid border-2 rounded-full" required />
                <label htmlFor="">Password</label>
                <input type="password"  className="w-[450px] h-[50px] border-solid border-2 rounded-full mb-2" required />
                <Button marginTop={7} text="Sign Up" paddingX={14} paddingY={2} />
              </form>
            </div>
          </div>
        
          
        </section>
    )
}

export default SignUp