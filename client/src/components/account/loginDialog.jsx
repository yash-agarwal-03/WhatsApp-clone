import React, { useState } from "react";
import { IoArrowBack } from 'react-icons/io5';
import LoginQR from "./loginQR";
import DialogList from "./dialogList";
const LoginDialog = () => {


    const [showDialog, setShowDialog] = useState(false);
    const handleClick = () => {
        console.log('button clicked');
        setShowDialog(!showDialog);
        const bod = document.getElementById('body');
        if(showDialog)
        {
            bod.style.backgroundColor = '#2f2f2f';
        }
        else
            bod.style.backgroundColor = '#2c2c2c';
    };

    return (<div>
        {
            !showDialog && (<button className="DialogBtn" onClick={handleClick}>Lets get started</button>)
        }

        {
            showDialog && (<div className='DialogBox'>
                <p style={{ margin: '2rem' }}>To open Whatsapp on your computer:</p>
                <div className="DialogContentBox">
                    <DialogList />
                    <LoginQR />
                    <button className="backBtn" onClick={handleClick}> <IoArrowBack size={20} />Back</button>
                </div>
            </div>)
        }
    </div>)
};

export default LoginDialog;