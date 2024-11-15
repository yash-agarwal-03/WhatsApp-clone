import AppBar from "./AppBar";
import LoginDialog from "./account/loginDialog";
const LandingPage = () => {
    return <div id="sub-body">
        <AppBar divname='content' size='30vh'/>
        <LoginDialog/>
    </div>
}
export default LandingPage;