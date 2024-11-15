import { useContext } from "react";
import { AccountContext } from "../../context/AccountContextProvider";
import { MdOutlineMessage } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import styled from "styled-components";
const MsgIcon = styled(MdOutlineMessage)`
    height: 1.7rem;
  aspect-ratio: 1/1;`
  const Options = styled(SlOptions)`
    height: 1.5rem;
  aspect-ratio: 1/1;`
const Inbox = (props) =>
{
    const { account } = useContext(AccountContext);
    
    let picture = "https://lh3.googleusercontent.com/a/ACg8ocJP_in6KufqhiewEy5GMPypvaTSsQ3EvsoHm_DKHnpu62fg77K1=s96-c";
    // if (account)
    //     picture = account["picture"];
    return <div className="inbox-box">
        <header>
            {/* <div className="profileicon"></div> */}
            <img src={picture} className="profileicon" alt='profile'/>
            Chats
            <div className="headerMenu">
                <MsgIcon />
                <Options />
            </div>
        </header>
    </div>
}
export default Inbox;