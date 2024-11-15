import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
function SignIn() {
    const handleSuccess = (res) => {
        console.log('Login successful');
        console.log(jwtDecode(res.credential));
    }
    const handleLoginError = (res) => {
        console.log('Login error');
        console.log(res);
    }
    return <GoogleLogin onSuccess={handleSuccess} onError={handleLoginError} className="signin">hello world</GoogleLogin>
    
}
export default SignIn;