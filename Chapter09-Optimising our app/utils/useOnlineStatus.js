const { useState, useEffect } = require("react");

const useOnlineStatus = () => {
    const [status, setStatus] = useState(navigator.onLine);// Use `navigator.onLine` to get the initial status

    useEffect(() => {
        const onlineStatus = () => {
            setStatus(false);
        }

        const offlineStatus = () => {
            setStatus(true);
        }

        window.addEventListener("online", onlineStatus)
        window.addEventListener("offline", offlineStatus)

        return () => {
            window.removeEventListener("online", onlineStatus);
            window.removeEventListener("offline", offlineStatus);
        }
    }, []);
    return status;
}

export default useOnlineStatus;