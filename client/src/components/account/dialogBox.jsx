import DialogList from "./dialogList";
import LoginQR from "./loginQR";
import { IoArrowBack } from 'react-icons/io5';
import { useState } from "react";
const DialogBox = () => {
    const [showDialog, setShowDialog] = useState(false);
    const handleClick = () => {
        console.log('button clicked');
        setShowDialog(!showDialog);
        const bod = document.getElementById('body');
        if(showDialog)
        {
            bod.style.backgroundColor = '#fff';
        }
        else
            bod.style.backgroundColor = '#dedede';
    };
    return 
    
};
export default DialogBox;