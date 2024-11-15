import { AccountContext } from "../../context/AccountContextProvider"
import { useContext } from "react"
import AppBar from "../AppBar";
import Inbox from "./inbox";
import MsgBox from "./msgs";
const ChatDialog = () => {
    var name;
    const { account } = useContext(AccountContext);
    name = 'Yash';
    if(account)
    name = account.given;
    
    console.log(`User logged in as : ${name}`)
    return (
        <div className="chatPage">
            <AppBar divname='invis' size='15vh' bgc='#054640' />
            <div className="chatDialogBox">
                <Inbox name={name}/>
                <MsgBox/>
            </div>
        </div>)
    
}
export default ChatDialog;