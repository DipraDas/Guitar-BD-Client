import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState(null);
    // const [isUserLoading,setIsUserLoading]=useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://guitar-bd-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                        // setIsUserLoading(false);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;