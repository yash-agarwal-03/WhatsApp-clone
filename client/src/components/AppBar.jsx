import { BsWhatsapp } from "react-icons/bs";
import styled from 'styled-components'
const WtspIcon = styled(BsWhatsapp)`
    margin-right: 10px`

function AppBar(props) {
    return <div className='AppBar' style={{height: `${props.size}`,backgroundColor:`${props.bgc}`}} >
                <div className={props.divname}>
                    <div className="wtspicon">
                        < WtspIcon size={65}/>
                    </div>
                    
                    <p>Whatsapp Web</p>
                </div>
            
        </div>
}
export default AppBar;
