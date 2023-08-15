import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"; // doesnt show in on-complete, but must include !!

export function successMsg(msg: string) {
    toast.success(msg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, // time to close in ms
    });
}
export function errorMsg(msg: string) {
    toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3500, // time to close in ms
    });
}