import { useEffect, useState } from "react"

const useInternetStatus = () => {
    const [status, setStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            console.log("offline");
            setStatus(false);
        })

        window.addEventListener("online", () => {
            console.log("online");
            setStatus(true);
        })
    }, [])

    return status;
}

export default useInternetStatus;