import {useNavigate} from "react-router";
import {setSessionId} from "../src/redux/sessionSlide.ts";
import {useDispatch} from "react-redux";

export default function Auth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


const handleAuthentication = () => {


        dispatch(setSessionId("8418"))

    navigate("/account");
}

return (
    <>
    <h1>Welcome to the Authentication page!</h1>
        <button onClick={handleAuthentication}>Click me for ID</button>
    </>
)

}