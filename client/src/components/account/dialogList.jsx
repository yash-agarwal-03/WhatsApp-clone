import { CiMenuKebab } from "react-icons/ci";
import { PiGearFine } from "react-icons/pi";
const DialogList = () => {
    return <div>
        <ol className="dialogList">
            <li> Open WhatsApp on your Phone</li>
            <li> Tap <b>Menu</b> <CiMenuKebab /> on Android, or <b>Settings</b> <PiGearFine /> on iPhone</li>
            <li> Tap Linked Devices and then Link a Device</li>
            <li> Point the camera at the screen to scan the QR code</li>
        </ol></div>
};
export default DialogList;