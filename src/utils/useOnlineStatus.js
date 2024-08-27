import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus, useOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            useOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            useOnlineStatus(true);
        });
    },[])

    return onlineStatus
}

export default useOnlineStatus;