import DenseQRCode from "./QRimage";
import {jwtDecode} from 'jwt-decode';
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountContextProvider";

function LoginQR() {
    const { setAccount } = useContext(AccountContext);
    const handleSuccess = (res) => {
        console.log('Login successful');
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
        console.log(decoded);
    }
    const handleLoginError = (res) => {
        console.log('Login error');
        console.log(res);
    }
    return <div className="LoginQR">
        <DenseQRCode />
        <GoogleLogin onSuccess={handleSuccess} onError={handleLoginError} className='signin'/>
    </div>
}
export default LoginQR;