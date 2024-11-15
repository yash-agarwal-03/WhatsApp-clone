import {createContext,useState } from "react";
export const AccountContext = createContext(null);
const AccountContextProvider = ({ children }) => {
    
    const [account, setAccount] = useState();

    return <AccountContext.Provider
        value={{ account, setAccount }}>
        
            {children}
    </AccountContext.Provider>
}
export default AccountContextProvider;