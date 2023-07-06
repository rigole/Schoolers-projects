import Button from "../Button/Button"
import { useDispatch } from "react-redux"
import { logout } from "../../actions/userActions"
function Profile(){
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch<any>(logout())
    }

    return (
        <div className="pt-20">
            This is your profile
            <div onClick={logoutHandler}>
                <Button text="Sign out" paddingX={14} paddingY={2} marginTop={4}  />
            </div>
            
        </div>
    )
}

export default Profile