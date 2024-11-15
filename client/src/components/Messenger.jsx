import LandingPage from "./LoginLandingPage";
import { useContext } from "react";
import { AccountContext } from "../context/AccountContextProvider";
import ChatDialog from "./chatPage/chatdialog";
// import { Link } from "react-router-dom";
function Messenger() {
    const { account } = useContext(AccountContext);
    if (account)
        console.log('EMail logged in');
    // return <ChatDialog />
    return account ? <ChatDialog /> : <LandingPage />;
    // return account ? <Link to='/chat' /> : <LandingPage />;
}
export default  Messenger;